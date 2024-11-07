import styled from "styled-components";

import { BadgeProps } from "./badge";

export const BadgeWrapper = styled.span<BadgeProps>`
  display: inline-block;
  min-width: 80px;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid ${({ colors }) => colors?.border};
  font-size: 0.8rem;
  text-align: center;
  text-transform: capitalize;
  background-color: ${({ colors }) => colors?.background};
  color: ${({ colors }) => colors?.border};
`;
