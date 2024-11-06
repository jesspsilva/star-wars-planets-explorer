import { memo } from "react";

import { IPlanets } from "@/app/types/planets";
import { formatPopulation } from "@/app/utils/format-numbers";

import { tableHeaders } from "./config";
import * as Styled from "./table.styles";

type TableProps = {
  data: IPlanets[];
};

export const Table: React.FC<TableProps> = memo(function Table({ data }) {
  const renderData = (value: string | number | string[], key: string) => {
    return key === "population"
      ? formatPopulation(value as string)
      : value || "-";
  };

  return (
    <Styled.TableWrapper>
      <Styled.TableHead>
        <tr>
          {tableHeaders.map((header) => (
            <Styled.TableHeader key={header.label}>
              {header.label}
            </Styled.TableHeader>
          ))}
        </tr>
      </Styled.TableHead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <Styled.TableRow key={item.name} data-testid="table-row">
                {tableHeaders.map((header) => (
                  <Styled.TableData
                    key={header.label}
                    data-label={header.label}
                  >
                    {renderData(item[header.key as keyof IPlanets], header.key)}
                  </Styled.TableData>
                ))}
              </Styled.TableRow>
            );
          })
        ) : (
          <tr>
            <Styled.TableData colSpan={8}>No data available</Styled.TableData>
          </tr>
        )}
      </tbody>
    </Styled.TableWrapper>
  );
});
