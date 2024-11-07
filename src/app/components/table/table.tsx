import { memo } from "react";

import Badge from "@/app/components/badge/badge";
import { IPlanets } from "@/app/types/planets";
import { EPlanetTerrains } from "@/app/types/terrains";
import { formatNumericValue } from "@/app/utils/format-numeric-values";
import getTerrainColor from "@/app/utils/terrains-colors";

import { tableConfig } from "./config";
import * as Styled from "./table.styles";


type TableProps = {
  data: IPlanets[];
};

export const Table: React.FC<TableProps> = memo(function Table({ data }) {
  const renderData = (value: string, key: string) => {
    const noFormatKeys = ["name", "gravity"];

    if (noFormatKeys.includes(key)) {
      return value;
    }
    if (key === "terrain") {
      const valuesArray = value.split(",").map(val => val.trim()) as EPlanetTerrains[];


      return (
        <div className="flex gap-2 flex-wrap lg:justify-start justify-end">
          {valuesArray.map((value) => (
            <Badge label={value} key={value} color={getTerrainColor(value)}/>
          ))}
        </div>
      );
    }

    const header = tableConfig.find((config) => config.key === key);
    const unit = header ? header.unit : "";

    return formatNumericValue(value as string, unit);
  };

  return (
    <Styled.TableWrapper>
      <Styled.TableHead>
        <tr>
          {tableConfig.map((config) => (
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
              <Styled.TableRow key={item.name} data-testid="table-row">
                {tableConfig.map((config) => (
                  <Styled.TableData
                    key={config.label}
                    data-label={config.label}
                  >
                    {renderData(
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
});
