export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "manchester",
  name: "Manchester",
  countyOrRegion: "Greater Manchester",
  latitude: 53.4808,
  longitude: -2.2426,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "stockport",
    name: "Stockport",
    countyOrRegion: "Greater Manchester",
    latitude: 53.4082,
    longitude: -2.1584,
  },
  {
    slug: "trafford",
    name: "Trafford",
    countyOrRegion: "Greater Manchester",
    latitude: 53.4358,
    longitude: -2.3268,
  },
  {
    slug: "oldham",
    name: "Oldham",
    countyOrRegion: "Greater Manchester",
    latitude: 53.5393,
    longitude: -2.1076,
  },
  {
    slug: "bolton",
    name: "Bolton",
    countyOrRegion: "Greater Manchester",
    latitude: 53.5761,
    longitude: -2.4287,
  },
  {
    slug: "bury",
    name: "Bury",
    countyOrRegion: "Greater Manchester",
    latitude: 53.5918,
    longitude: -2.3027,
  },
  {
    slug: "rochdale",
    name: "Rochdale",
    countyOrRegion: "Greater Manchester",
    latitude: 53.6158,
    longitude: -2.1608,
  },
  {
    slug: "wigan",
    name: "Wigan",
    countyOrRegion: "Greater Manchester",
    latitude: 53.5454,
    longitude: -2.6308,
  },
  {
    slug: "salford",
    name: "Salford",
    countyOrRegion: "Greater Manchester",
    latitude: 53.4875,
    longitude: -2.2901,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
