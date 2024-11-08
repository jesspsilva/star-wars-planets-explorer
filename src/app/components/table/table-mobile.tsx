import { memo } from "react";

import { IPlanets } from "@/app/types/planets";
import { formatPlanetDetails } from "@/app/utils/format-planet-details";

import * as Styled from "./table.styles";

import type { TableProps } from "./table";

function TableMobile({
  data,
  columns,
  onRowClick,
}: Pick<TableProps, "data" | "onRowClick" | "columns">) {
  return (
    <Styled.TableWrapper>
      <tbody>
        {data.map((item) => (
          <Styled.TableRow
            key={item.name}
            data-testid="mobile-table-row"
            onClick={() => onRowClick(item)}
            className="hover:bg-blue-50 cursor-pointer"
          >
            {columns.map((col, index) => (
              <Styled.TableData
                key={col.key}
                className={`${index < 5 ? "w-[12%]" : "w-1/5"}`}
                data-testid="mobile-table-cell"
                data-label={col.name}
              >
                {formatPlanetDetails(
                  item[col.key as keyof IPlanets] as string,
                  col.key
                )}
              </Styled.TableData>
            ))}
          </Styled.TableRow>
        ))}
      </tbody>
    </Styled.TableWrapper>
  );
}

export default memo(TableMobile);
