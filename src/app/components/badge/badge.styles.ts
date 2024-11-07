import styled from "styled-components";

import { BadgeProps } from "./badge";

export const BadgeWrapper = styled.span<BadgeProps>`
  display: inline-block;
  min-width: 80px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  text-align: center;
  text-transform: capitalize;
  background-color: ${({ color }) => color};
`;
