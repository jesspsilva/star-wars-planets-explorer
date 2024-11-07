import { MouseEvent, memo } from "react";

import { IPlanets } from "@/app/types/planets";
import { formatPlanetDetails } from "@/app/utils/format-planet-details";
import { planetDetailsConfig } from "@/app/utils/planet-details-config";

import SkeletonLoader from "../skeleton-loader/skeleton-loader";

import TableEmptyState from "./table-empty-state";
import * as Styled from "./table.styles";

export type TableProps = {
  data: IPlanets[];
  onRowClick: (planet: IPlanets) => void;
  onClearClick: () => void;
  isLoading: boolean;
};

function Table({ data, onRowClick, onClearClick, isLoading }: TableProps) {
  const handleRowClick = (
    e: MouseEvent<HTMLTableRowElement>,
    planet: IPlanets
  ) => {
    e.preventDefault();
    onRowClick(planet);
  };

  if (isLoading) return <SkeletonLoader numberOfItems={10}/>;

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
            <TableEmptyState onClearClick={onClearClick} />
          </tr>
        )}
      </tbody>
    </Styled.TableWrapper>
  );
}

export default memo(Table);
