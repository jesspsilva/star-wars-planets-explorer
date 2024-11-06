"use client";

import usePlanets from "./hooks/use-planets";
import { IPlanetsApiResponse } from "./types/planets";

export default function Home() {
  const { data, isPending, error } = usePlanets();
  
  if (isPending) return <div>Loading...</div>;
  
  if (error) return <div>An error has occurred: {error.message}</div>;
  
  const { results: planets }: IPlanetsApiResponse = data || { results: [] };
  
  return (
    <div>
      {planets.map((planet) => (
        <p key={planet.url}>{planet.name}</p>
      ))}
    </div>
  );
}
