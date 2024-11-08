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

import { TableContainer } from "./table.styles";

import type { TableProps } from "./table";

export default function TableDesktop({
  data,
  columns,
  onRowClick,
}: Pick<TableProps, "data" | "onRowClick" | "columns">) {
  return (
    <div className="relative w-full h-[26rem] 2xl:h-auto">
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
        <TableContainer className="flex-1 overflow-auto 2xl:max-h-none">
          <Table className="w-full table-fixed">
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.name}
                  data-testid="desktop-table-row"
                  onClick={() => onRowClick(item)}
                  className="hover:bg-blue-50 cursor-pointer"
                >
                  {columns.map((col, index) => (
                    <TableCell
                      key={col.key}
                      data-label={col}
                      className={`${index < 5 ? "w-[12%]" : "w-1/5"}`}
                      data-testid="table-desktop-cell"
                    >
                      {formatPlanetDetails(
                        item[col.key as keyof IPlanets] as string,
                        col.key
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
