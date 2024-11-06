"use client";

import { Table } from "./components/table/table";
import usePlanets from "./hooks/use-planets";
import * as Styled from "./page.styles";
import { IPlanetsApiResponse } from "./types/planets";

export default function Home() {
  const { data, isPending, error } = usePlanets();

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const { results: planets }: IPlanetsApiResponse = data || { results: [] };

  return (
    <main className="m-20">
      <Styled.TableContainer>
        <Table data={planets} />
      </Styled.TableContainer>
    </main>
  );
}
