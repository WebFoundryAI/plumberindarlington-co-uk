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

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "darlington"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('darlington');
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
      expect(slugs).toContain('darlington');
      expect(slugs).toContain('newton-aycliffe');
      expect(slugs).toContain('bishop-auckland');
      expect(slugs).toContain('richmond');
      expect(slugs).toContain('northallerton');
      expect(slugs).toContain('catterick');
      expect(slugs).toContain('sedgefield');
      expect(slugs).toContain('barnard-castle');
      expect(slugs).toContain('shildon');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "darlington"', () => {
      const loc = getLocationBySlug('darlington');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Darlington');
    });

    it('returns correct location for "newton-aycliffe"', () => {
      const loc = getLocationBySlug('newton-aycliffe');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Newton Aycliffe');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
