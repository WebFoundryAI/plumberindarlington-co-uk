export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "darlington",
  name: "Darlington",
  countyOrRegion: "County Durham",
  latitude: 54.5236,
  longitude: -1.5503,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "newton-aycliffe",
    name: "Newton Aycliffe",
    countyOrRegion: "County Durham",
    latitude: 54.6189,
    longitude: -1.5831,
  },
  {
    slug: "bishop-auckland",
    name: "Bishop Auckland",
    countyOrRegion: "County Durham",
    latitude: 54.6619,
    longitude: -1.6779,
  },
  {
    slug: "richmond",
    name: "Richmond",
    countyOrRegion: "North Yorkshire",
    latitude: 54.4037,
    longitude: -1.7380,
  },
  {
    slug: "northallerton",
    name: "Northallerton",
    countyOrRegion: "North Yorkshire",
    latitude: 54.3379,
    longitude: -1.4283,
  },
  {
    slug: "catterick",
    name: "Catterick",
    countyOrRegion: "North Yorkshire",
    latitude: 54.3780,
    longitude: -1.6400,
  },
  {
    slug: "sedgefield",
    name: "Sedgefield",
    countyOrRegion: "County Durham",
    latitude: 54.6531,
    longitude: -1.4524,
  },
  {
    slug: "barnard-castle",
    name: "Barnard Castle",
    countyOrRegion: "County Durham",
    latitude: 54.5439,
    longitude: -1.9249,
  },
  {
    slug: "shildon",
    name: "Shildon",
    countyOrRegion: "County Durham",
    latitude: 54.6310,
    longitude: -1.6416,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
