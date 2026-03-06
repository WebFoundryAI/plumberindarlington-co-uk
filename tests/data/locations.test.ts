import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 9 locations', () => {
      expect(LOCATIONS).toHaveLength(9);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has latitude within Edinburgh & Lothians bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(55.8);
        expect(loc.latitude).toBeLessThan(56.1);
      }
    });

    it('every location has longitude within Edinburgh & Lothians bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-3.6);
        expect(loc.longitude).toBeLessThan(-3.0);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "edinburgh"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('edinburgh');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 9 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(9);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('edinburgh');
      expect(slugs).toContain('leith');
      expect(slugs).toContain('musselburgh');
      expect(slugs).toContain('dalkeith');
      expect(slugs).toContain('livingston');
      expect(slugs).toContain('corstorphine');
      expect(slugs).toContain('morningside');
      expect(slugs).toContain('portobello');
      expect(slugs).toContain('bonnyrigg');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "edinburgh"', () => {
      const loc = getLocationBySlug('edinburgh');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Edinburgh');
    });

    it('returns correct location for "leith"', () => {
      const loc = getLocationBySlug('leith');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Leith');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
