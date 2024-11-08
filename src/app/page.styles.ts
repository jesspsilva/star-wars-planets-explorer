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

  @media (max-width: 768px) {
    padding-bottom: 9rem;
  }
`;

export const Footer = styled.footer`
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 20px;

    background: var(--white);
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  }
`;
