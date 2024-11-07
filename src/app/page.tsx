"use client";
import { useState, useMemo } from "react";

import { Table } from "./components/table/table";
import usePlanets from "./hooks/use-planets";
import * as Styled from "./page.styles";
import { IPlanetsApiResponse } from "./types/planets";
import Pagination from "./components/pagination/pagination";

const Loading = () => <div>Loading...</div>;

const ErrorMessage = ({ message }: { message: string }) => (
  <div role="alert">An error has occurred: {message}</div>
);

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = usePlanets(page);

  const planets: IPlanetsApiResponse["results"] = useMemo(() => {
    return data?.results || [];
  }, [data]);

  const totalOfResults: number = useMemo(() => {
    return data?.count || 0;
  }, [data]);

  if (isPending) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Styled.Main>
      <Styled.TableContainer>
        <Table data={planets} />
      </Styled.TableContainer>
      <footer className="mt-8 text-sm flex justify-between items-center lg:flex-row flex-col gap-4">
        <span>
          Showing {Math.max(1, (page - 1) * 10 + 1)}-
          {Math.min(page * 10, totalOfResults)} results of {totalOfResults}
        </span>
        <Pagination
          currentPage={page}
          totalItems={totalOfResults}
          itemsPerPage={10}
          onPageChange={setPage}
        />
      </footer>
    </Styled.Main>
  );
}
