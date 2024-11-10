import styled from "styled-components";

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
