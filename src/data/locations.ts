export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "edinburgh",
  name: "Edinburgh",
  countyOrRegion: "City of Edinburgh",
  latitude: 55.9533,
  longitude: -3.1883,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "leith",
    name: "Leith",
    countyOrRegion: "City of Edinburgh",
    latitude: 55.9760,
    longitude: -3.1720,
  },
  {
    slug: "musselburgh",
    name: "Musselburgh",
    countyOrRegion: "East Lothian",
    latitude: 55.9416,
    longitude: -3.0517,
  },
  {
    slug: "dalkeith",
    name: "Dalkeith",
    countyOrRegion: "Midlothian",
    latitude: 55.8946,
    longitude: -3.0684,
  },
  {
    slug: "livingston",
    name: "Livingston",
    countyOrRegion: "West Lothian",
    latitude: 55.8834,
    longitude: -3.5158,
  },
  {
    slug: "corstorphine",
    name: "Corstorphine",
    countyOrRegion: "City of Edinburgh",
    latitude: 55.9421,
    longitude: -3.2818,
  },
  {
    slug: "morningside",
    name: "Morningside",
    countyOrRegion: "City of Edinburgh",
    latitude: 55.9260,
    longitude: -3.2087,
  },
  {
    slug: "portobello",
    name: "Portobello",
    countyOrRegion: "City of Edinburgh",
    latitude: 55.9531,
    longitude: -3.1143,
  },
  {
    slug: "bonnyrigg",
    name: "Bonnyrigg",
    countyOrRegion: "Midlothian",
    latitude: 55.8745,
    longitude: -3.1019,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
