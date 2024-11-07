import { MouseEvent, memo } from "react";

import { IPlanets } from "@/app/types/planets";
import { formatPlanetDetails } from "@/app/utils/format-planet-details";
import { planetDetailsConfig } from "@/app/utils/planet-details-config";

import * as Styled from "./table.styles";

type TableProps = {
  data: IPlanets[];
  onRowClick: (planet: IPlanets) => void;
};

function Table({ data, onRowClick }: TableProps) {
  const handleRowClick = (
    e: MouseEvent<HTMLTableRowElement>,
    planet: IPlanets
  ) => {
    e.preventDefault();
    onRowClick(planet);
  };

  return (
    <Styled.TableWrapper>
      <Styled.TableHead>
        <tr>
          {planetDetailsConfig.map((config) => (
            <Styled.TableHeader key={config.label}>
              {config.label}
            </Styled.TableHeader>
          ))}
        </tr>
      </Styled.TableHead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <Styled.TableRow
                key={item.name}
                data-testid="table-row"
                onClick={(e) => handleRowClick(e, item)}
              >
                {planetDetailsConfig.map((config) => (
                  <Styled.TableData
                    key={config.label}
                    data-label={config.label}
                  >
                    {formatPlanetDetails(
                      item[config.key as keyof IPlanets] as string,
                      config.key
                    )}
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
}

export default memo(Table);
