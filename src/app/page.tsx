"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";

import PlanetsTable from "@/app/components/planets-table/planets-table";

import { type ColumnToggleConfig } from "./components/column-toggle/column-toggle";
import Error from "./components/error/error";
import PlanetsTableFooter from "./components/planets-table/planets-table-footer";
import PlanetsTableHeader from "./components/planets-table/planets-table-header";
import Spinner from "./components/spinner/spinner";
import usePlanets from "./hooks/use-planets";
import { Main } from "./page.styles";
import { planetDetailsConfig } from "./utils/planet-details-config";


const ITEMS_PER_PAGE = 10;

export default function Home() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue] = useDebounce(searchValue, 500);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [tableColumns, setTableColumns] = useState<ColumnToggleConfig[]>(() =>
    planetDetailsConfig.map((config) => ({
      name: config.label,
      isVisible: true,
      key: config.key,
    }))
  );

  const { data, isPending, error } = usePlanets(page, debouncedSearchValue);

  useEffect(() => {
    if (data) {
      setIsFirstLoad(false);
    }
  }, [data]);

  const visibleTableColumnsData = useMemo(() => {
    return tableColumns
      .filter((col) => col.isVisible)
      .map(({ key, name }) => ({
        key,
        name,
      }));
  }, [tableColumns]);

  const handleColumnToggle = useCallback((columnKey: string) => {
    setTableColumns((prev) =>
      prev.map((col) =>
        col.key === columnKey ? { ...col, isVisible: !col.isVisible } : col
      )
    );
  }, []);

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    setPage(1);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  if (error) return <Error />;
  if (isPending && isFirstLoad) return <Spinner />;

  return (
    <Main>
      <PlanetsTableHeader
        searchValue={searchValue}
        columns={tableColumns}
        onSearchChange={handleInputChange}
        onColumnToggle={handleColumnToggle}
      />
      <PlanetsTable
        planets={data?.results || []}
        onClearSearch={() => handleInputChange("")}
        isLoading={isPending}
        columns={visibleTableColumnsData}
      />
      <PlanetsTableFooter
        currentPage={page}
        totalResults={data?.count || 0}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </Main>
  );
}
