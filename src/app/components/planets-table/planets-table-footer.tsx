import Pagination from "../pagination/pagination";

import { Footer } from "./planets-table-footer.styles";

interface PlanetsTableFooterProps {
  currentPage: number;
  totalResults: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function PlanetsTableFooter({
  currentPage,
  totalResults,
  itemsPerPage,
  onPageChange,
}: PlanetsTableFooterProps) {
  if (!totalResults) return null;

  return (
    <Footer className="mt-8 text-sm flex justify-between items-center lg:flex-row flex-col gap-4">
      <span>
        Showing {Math.max(1, (currentPage - 1) * itemsPerPage + 1)}-
        {Math.min(currentPage * itemsPerPage, totalResults)} results of{" "}
        {totalResults}
      </span>
      <Pagination
        currentPage={currentPage}
        totalItems={totalResults}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </Footer>
  );
}
