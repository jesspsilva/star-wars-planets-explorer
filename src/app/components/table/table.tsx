import { memo } from "react";

import { IPlanets } from "@/app/types/planets";

import SkeletonLoader from "../skeleton-loader/skeleton-loader";

import TableDesktop from "./table-desktop";
import TableMobile from "./table-mobile";

import type { ColumnToggleConfig } from "@/app/components/column-toggle/column-toggle";

export type TableProps = {
  data: IPlanets[];
  onRowClick: (planet: IPlanets) => void;
  onClearClick: () => void;
  isLoading: boolean;
  columns: Pick<ColumnToggleConfig, "name" | "key">[];
};

function Table({
  data,
  onRowClick,
  onClearClick,
  isLoading,
  columns,
}: TableProps) {
  if (isLoading) return <SkeletonLoader numberOfItems={10} />;

  return (
    <>
      <div className="hidden lg:block">
        <TableDesktop data={data} onRowClick={onRowClick} columns={columns} onClearClick={onClearClick}/>
      </div>

      <div className="block lg:hidden">
        <TableMobile data={data} onRowClick={onRowClick} columns={columns} onClearClick={onClearClick}/>
      </div>
    </>
  );
}

export default memo(Table);
