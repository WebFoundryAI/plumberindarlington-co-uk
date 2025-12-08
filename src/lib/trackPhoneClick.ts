import { supabase } from "@/integrations/supabase/client";
import { BRAND } from "@/config/brand";

export async function trackPhoneClick(sourcePage: string) {
  try {
    await supabase.from("leads").insert({
      name: "",
      phone: BRAND.phone,
      email: "",
      postcode: "",
      service: "phone-call",
      location: BRAND.primaryLocation,
      message: "Phone number clicked",
      source_page: sourcePage,
    });
  } catch (error) {
    // Silently fail - don't interrupt the call
    console.error("Failed to track phone click:", error);
  }
}
