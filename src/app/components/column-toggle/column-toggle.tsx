import { ViewVerticalIcon } from "@radix-ui/react-icons";
import { useCallback, useMemo } from "react";

import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

export interface ColumnToggleConfig {
  name: string;
  isVisible: boolean;
  key: string;
}

type ColumnToggleProps = {
  columns: ColumnToggleConfig[];
  onColumnToggle: (key: string) => void;
  minVisibleColumns?: number;
};

export default function ColumnToggle({
  columns,
  onColumnToggle,
  minVisibleColumns = 4,
}: ColumnToggleProps) {
  const visibleColumnsCount = useMemo(
    () => columns.filter((col) => col.isVisible).length,
    [columns]
  );

  const isColumnDisabled = useCallback(
    (column: ColumnToggleConfig) => {
      return column.isVisible && visibleColumnsCount <= minVisibleColumns;
    },
    [visibleColumnsCount, minVisibleColumns]
  );

  const handleColumnToggle = useCallback(
    (column: ColumnToggleConfig) => {
      if (isColumnDisabled(column)) {
        return;
      }
      onColumnToggle(column.key);
    },
    [onColumnToggle, isColumnDisabled]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-3xl p-5 sm:w-auto w-full">
          <ViewVerticalIcon />
          Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {columns.map((column, index) => {
          return (
            <DropdownMenuCheckboxItem
              key={column.key + index}
              className="capitalize"
              checked={column.isVisible}
              onCheckedChange={() => handleColumnToggle(column)}
              disabled={isColumnDisabled(column)}
            >
              {column.name}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
