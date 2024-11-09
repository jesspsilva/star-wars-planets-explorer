import { memo } from "react";

import { IPlanets } from "@/app/types/planets";

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
  return (
    <>
      <div className="hidden lg:block" data-testid="table-desktop">
        <TableDesktop
          data={data}
          onRowClick={onRowClick}
          columns={columns}
          onClearClick={onClearClick}
          isLoading={isLoading}
        />
      </div>

      <div className="block lg:hidden" data-testid="table-mobile">
        <TableMobile
          data={data}
          onRowClick={onRowClick}
          columns={columns}
          onClearClick={onClearClick}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default memo(Table);
