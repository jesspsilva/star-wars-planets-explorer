import { IPlanetsApiResponse } from "../types/planets";

export const getPlanets = async (
  page: number,
  searchValue?: string,
): Promise<IPlanetsApiResponse> => {
  let url = `https://swapi.dev/api/planets/?page=${page}`;

  if (searchValue) {
    url += `&search=${searchValue}`
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return response.json();
};
