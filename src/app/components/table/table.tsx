import { MouseEvent, memo } from "react";

import { IPlanets } from "@/app/types/planets";
import { formatPlanetDetails } from "@/app/utils/format-planet-details";
import { planetDetailsConfig } from "@/app/utils/planet-details-config";
import { CrossCircledIcon, FileTextIcon } from "@radix-ui/react-icons";

import * as Styled from "./table.styles";

type TableProps = {
  data: IPlanets[];
  onRowClick: (planet: IPlanets) => void;
  onClearClick: () => void;
};

function Table({ data, onRowClick, onClearClick }: TableProps) {
  const handleRowClick = (
    e: MouseEvent<HTMLTableRowElement>,
    planet: IPlanets
  ) => {
    e.preventDefault();
    onRowClick(planet);
  };

  const handleClearClick = (e: MouseEvent<HTMLTableRowElement>) => {
    e.preventDefault();
    onClearClick();
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
            <Styled.EmptyState colSpan={planetDetailsConfig.length}>
              <span>
                <FileTextIcon width={80} height={80} />
              </span>
              <p>No data available.</p>
              <p>Try to adjust your search params or get back soon.</p>
              <span>
                <Styled.ClearButton onClick={(e) => handleClearClick(e)}>
                  Clear search
                  <CrossCircledIcon />
                </Styled.ClearButton>
              </span>
            </Styled.EmptyState>
          </tr>
        )}
      </tbody>
    </Styled.TableWrapper>
  );
}

export default memo(Table);
