import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import * as Styled from "./pagination.styles";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <Styled.PaginationContainer>
      <Styled.PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon />
        Prev
      </Styled.PaginationButton>
      {Array.from({ length: totalPages }, (_, index) => (
        <Styled.PaginationButton
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </Styled.PaginationButton>
      ))}
      <Styled.PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || !totalPages}
      >
        Next
        <ChevronRightIcon />
      </Styled.PaginationButton>
    </Styled.PaginationContainer>
  );
}
