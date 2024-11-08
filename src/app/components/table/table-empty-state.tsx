import { CrossCircledIcon, FileTextIcon } from "@radix-ui/react-icons";
import { MouseEvent } from "react";

import { planetDetailsConfig } from "@/app/utils/planet-details-config";

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
    <EmptyState colSpan={planetDetailsConfig.length}>
      <span className="icon">
        <FileTextIcon width={80} height={80} />
      </span>
      <p>No data available.</p>
      <p>Try to adjust your search params or get back soon.</p>
      <span className="clear-button">
        <ClearButton onClick={(e) => handleClearClick(e)}>
          Clear search
          <CrossCircledIcon />
        </ClearButton>
      </span>
    </EmptyState>
  );
}
