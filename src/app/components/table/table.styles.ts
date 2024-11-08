import styled from "styled-components";

export const TableContainer = styled.div`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--light-gray);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  display: block;
  padding: 5px;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  background: var(--white);
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: var(--light-blue);
  }
`;

export const TableData = styled.td`
 display: flex;
  justify-content: space-between;
  gap: 10px;

  font-weight: 400;
  padding: 12px;
  font-size: 0.9rem;
  color: var(--dark-blue);
  line-height: 1.5;
  border-bottom: 1px solid var(--light-gray);

  &::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }

  &:last-child {
    border-bottom: 0;
  }

  &:nth-child(-n + 7) {
    width: 100%;
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  max-width: 180px;
  padding: 10px 20px;
  font-size: 0.9rem;
  border-radius: 40px;
  border: 1px solid var(--light-gray);
  color: var(--foreground);
  background: transparent;

  &:hover {
    border-color: transparent;
    background-color: var(--light-gray);
  }
`;

export const EmptyState = styled.td`
  & p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    text-align: center;
  }

  & p:first-of-type {
    margin-top: 20px;
  }

  & span {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  & span:last-of-type {
    margin-bottom: 40px;
  }

  @media (max-width: 1199px) {
    border: 1px solid var(--light-gray);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
    background: var(--white);
  }
`;
