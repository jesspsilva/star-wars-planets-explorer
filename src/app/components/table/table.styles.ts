import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  border-bottom: 1px solid var(--light-gray);

  @media (max-width: 768px) {´
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const TableHeader = styled.th`
  padding: 20px;

  text-align: left;
  color: var(--gray);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
`;

export const TableRow = styled.tr`
  &.filterable {
    cursor: pointer;

    &:hover {
      background: var(--neutral-light);
    }
  }

  @media (max-width: 768px) {
    display: block;
    border: 1px solid var(--light-gray);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
    background: var(--white);

    &:not(:last-of-type) {
      margin-bottom: 4rem;
    }
  }
`;

export const TableData = styled.td`
  font-weight: 400;
  padding: 20px;
  text-align: left;
  font-size: 1rem;
  color: var(--dark-blue);
  line-height: 1.5;

  border-bottom: 1px solid var(--light-gray);

  &:first-child {
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 12px;

    font-size: 0.9em;
    text-align: right;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;