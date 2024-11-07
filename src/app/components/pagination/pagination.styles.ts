import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;

  &:not(:last-child) {
    margin: 0 5px;
  }

  &:hover {
    background-color: var(--light-blue);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.active {
    background-color: var(--alice-blue);
    border: 1px solid var(--alice-blue);
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.span`
  margin: 0 5px;
  cursor: pointer;
`;
