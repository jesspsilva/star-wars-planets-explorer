import styled from "styled-components";

export const TableContainer = styled.section`
  flex: 1;
`;

export const Main = styled.main`
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  background-color: transparent;

  @media (min-width: 1024px) {
    padding: 20px;
    margin: 60px;
    background-color: var(--white);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  }
`;
