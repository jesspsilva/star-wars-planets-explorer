import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { getPlanets } from "../api/planets";
import { IPlanetsApiResponse } from "../types/planets";

export default function usePlanets(): UseQueryResult<IPlanetsApiResponse, Error> {
  return useQuery<IPlanetsApiResponse, Error>({
    queryKey: ["planets"],
    queryFn: getPlanets,
  });
}
