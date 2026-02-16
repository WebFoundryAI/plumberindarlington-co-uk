// Cloudflare Pages Function version of lead capture endpoint
// Mirrors logic used in netlify/functions/api-lead.ts

export const onRequestPost = async (context: any) => {
  const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
  const RATE_LIMIT_MAX = 5;

  // @ts-ignore - lightweight in-memory store for single isolate best-effort limiting
  globalThis.__leadRateLimit = globalThis.__leadRateLimit || new Map<string, { count: number; start: number }>();
  // @ts-ignore
  const memoryStore: Map<string, { count: number; start: number }> = globalThis.__leadRateLimit;

  const ip = context.request.headers.get('CF-Connecting-IP') || 'unknown';
  const now = Date.now();
  const entry = memoryStore.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    memoryStore.set(ip, { count: 1, start: now });
  } else if (entry.count >= RATE_LIMIT_MAX) {
    return Response.json({ error: 'Too many requests, please try again shortly.' }, { status: 429 });
  } else {
    memoryStore.set(ip, { count: entry.count + 1, start: entry.start });
  }

  const payload = await context.request.json<Record<string, unknown>>().catch(() => null);
  if (!payload) return Response.json({ error: 'Invalid JSON payload' }, { status: 400 });

  const required = ['name', 'phone', 'postcode', 'service'];
  const errors = required.filter((field) => !String(payload[field] ?? '').trim()).map((field) => `${field} is required`);
  if (String(payload.company ?? '').trim()) errors.push('spam detected');
  if (errors.length) return Response.json({ error: errors.join(', '), fields: errors }, { status: 400 });

  const supabaseUrl = context.env.SUPABASE_URL as string | undefined;
  const supabaseServiceRole = context.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;
  if (!supabaseUrl || !supabaseServiceRole) {
    return Response.json({ error: 'Missing Supabase configuration' }, { status: 500 });
  }

  const record = {
    name: String(payload.name ?? '').trim(),
    phone: String(payload.phone ?? '').trim(),
    postcode: String(payload.postcode ?? '').trim().toUpperCase(),
    address: String(payload.address ?? '').trim() || null,
    service: String(payload.service ?? '').trim(),
    notes: String(payload.notes ?? '').trim() || null,
    source: String(payload.source ?? 'website').trim(),
    ip_address: ip,
    user_agent: context.request.headers.get('user-agent') || null,
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      apikey: supabaseServiceRole,
      authorization: `Bearer ${supabaseServiceRole}`,
      prefer: 'return=minimal',
    },
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    return Response.json({ error: 'Failed to store lead', details: await response.text() }, { status: 502 });
  }

  return Response.json({ success: true });
};
