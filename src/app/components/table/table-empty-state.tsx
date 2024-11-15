import { CrossCircledIcon, FileTextIcon } from "@radix-ui/react-icons";
import { MouseEvent } from "react";

import { TableProps } from "./table";
import { ClearButton, EmptyState } from "./table.styles";

export default function TableEmptyState({
  onClearClick,
}: Pick<TableProps, "onClearClick">) {
  const handleClearClick = (e: MouseEvent<HTMLTableRowElement>) => {
    e.preventDefault();
    onClearClick();
  };
  
  return (
    <EmptyState>
      <span className="icon">
        <FileTextIcon width={80} height={80} data-testid="table-empty-state-icon"/>
      </span>
      <p>No data available.</p>
      <p>Try to adjust your search params or get back soon.</p>
      <span className="clear-button">
        <ClearButton onClick={(e) => handleClearClick(e)}>
          Clear search
          <CrossCircledIcon data-testid="table-empty-state-clear-icon"/>
        </ClearButton>
      </span>
    </EmptyState>
  );
}
