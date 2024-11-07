"use client";
import { useState } from "react";

import { Table } from "./components/table/table";
import usePlanets from "./hooks/use-planets";
import * as Styled from "./page.styles";
import { IPlanetsApiResponse } from "./types/planets";
import Pagination from "./components/pagination/pagination";

export default function Home() {
  const { data, isPending, error } = usePlanets();
  const [page, setPage] = useState(1);

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const { results: planets }: IPlanetsApiResponse = data || { results: [] };
  const totalOfResults = data.count;

  return (
    <main className="m-20">
      <Styled.TableContainer>
        <Table data={planets} />
        <footer className="mt-10 text-sm flex justify-between items-center lg:flex-row flex-col">
          <span>
            Showing {Math.max(1, page * planets.length - 9)}-
            {page * planets.length} results of {totalOfResults}
          </span>
          <Pagination
            currentPage={page}
            totalItems={totalOfResults}
            itemsPerPage={10}
            onPageChange={setPage}
          />
        </footer>
      </Styled.TableContainer>
    </main>
  );
}
