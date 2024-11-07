"use client";

import { useMemo, useState } from "react";

import { debounce } from "@/app/utils/debounce";

import Modal from "./components/modal/modal";
import Pagination from "./components/pagination/pagination";
import Search from "./components/search/search";
import Table from "./components/table/table";
import usePlanets from "./hooks/use-planets";
import * as Styled from "./page.styles";
import { IPlanets, IPlanetsApiResponse } from "./types/planets";

const Loading = () => <div>Loading...</div>;

const ErrorMessage = ({ message }: { message: string }) => (
  <div role="alert">An error has occurred: {message}</div>
);

const ITEMS_PER_PAGE = 10;

export default function Home() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<null | IPlanets>(null);

  const { data, isPending, error } = usePlanets(page, debouncedSearchValue);

  const planets: IPlanetsApiResponse["results"] = useMemo(() => {
    return data?.results || [];
  }, [data]);

  const totalOfResults: number = useMemo(() => {
    return data?.count || 0;
  }, [data]);

  const handleSearchChange = debounce((value: string) => {
    setDebouncedSearchValue(value);
  }, 300);

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    setPage(1);
    handleSearchChange(value);
  };

  if (isPending && !searchValue) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  const handleRowClick = (planet: IPlanets) => {
    setSelectedPlanet(planet);
    setIsDetailsModalVisible(true);
  };
  
  return (
    <Styled.Main>
      <header className="mb-10 flex justify-end">
        <Search
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search for a planet"
        />
      </header>
      <Styled.TableContainer>
        <Table data={planets} onRowClick={handleRowClick} />
      </Styled.TableContainer>
      <footer className="mt-8 text-sm flex justify-between items-center lg:flex-row flex-col gap-4">
        <span>
          Showing {Math.max(1, (page - 1) * ITEMS_PER_PAGE + 1)}-
          {Math.min(page * ITEMS_PER_PAGE, totalOfResults)} results of{" "}
          {totalOfResults}
        </span>
        <Pagination
          currentPage={page}
          totalItems={totalOfResults}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setPage}
        />
      </footer>
      {isDetailsModalVisible && selectedPlanet && (
        <Modal
          planet={selectedPlanet}
          onClose={() => setIsDetailsModalVisible(false)}
        />
      )}
    </Styled.Main>
  );
}
