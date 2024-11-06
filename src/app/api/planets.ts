import { IPlanetsApiResponse } from "../types/planets";

export const getPlanets = async (): Promise<IPlanetsApiResponse> => {
  const url = "https://swapi.dev/api/planets/";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return response.json();
};
