import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { getPlanets } from "../api/planets";
import { IPlanetsApiResponse } from "../types/planets";

export default function usePlanets(
  page: number,
  searchValue?: string,
): UseQueryResult<IPlanetsApiResponse, Error> {
  return useQuery<IPlanetsApiResponse, Error>({
    queryKey: ["planets", page, searchValue],
    queryFn: () => getPlanets(page, searchValue),
  });
}
