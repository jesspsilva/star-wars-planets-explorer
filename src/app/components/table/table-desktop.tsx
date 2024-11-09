import { memo } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { IPlanets } from "@/app/types/planets";
import { formatPlanetDetails } from "@/app/utils/format-planet-details";

import SkeletonLoader from "../skeleton-loader/skeleton-loader";

import TableEmptyState from "./table-empty-state";
import { TableContainer } from "./table.styles";

import type { TableProps } from "./table";

export function TableDesktop({
  data,
  columns,
  onRowClick,
  onClearClick,
  isLoading,
}: TableProps) {
  return (
    <div className="relative w-full h-[26rem] 2xl:h-auto min-h-96">
      <div className="absolute inset-0 flex flex-col 2xl:relative 2xl:h-auto">
        <div className="bg-white">
          <Table className="w-full table-fixed">
            <TableHeader>
              <TableRow>
                {columns.map((col, index) => (
                  <TableHead
                    key={col.key}
                    className={`text-[0.9rem] font-bold ${
                      index < 5 ? "w-[12%]" : "w-1/5"
                    } bg-white`}
                    data-testid="table-desktop-head"
                  >
                    {col.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        {isLoading ? (
          <SkeletonLoader dataTestid="desktop"/>
        ) : (
          <TableContainer className="flex-1 overflow-auto 2xl:max-h-none">
            <Table className="w-full table-fixed" data-testid="data-table">
              <TableBody>
                {data.length > 0 &&
                  data.map((item) => (
                    <TableRow
                      key={item.name}
                      data-testid="desktop-table-row"
                      onClick={() => onRowClick(item)}
                      className="hover:bg-blue-50 cursor-pointer"
                    >
                      {columns.map((col, index) => (
                        <TableCell
                          key={col.key}
                          className={`${index < 5 ? "w-[12%]" : "w-1/5"}`}
                          data-testid="desktop-table-cell"
                        >
                          {formatPlanetDetails(
                            item[col.key as keyof IPlanets] as string,
                            col.key
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                {!data.length && (
                  <tr>
                    <TableEmptyState onClearClick={onClearClick} />
                  </tr>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
}

export default memo(TableDesktop);
