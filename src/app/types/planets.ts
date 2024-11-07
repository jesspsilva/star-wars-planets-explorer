import { EPlanetTerrains } from "./terrains";

export interface IPlanetsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPlanets[];
}

export interface IPlanets {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: EPlanetTerrains[];
  url: string;
}
