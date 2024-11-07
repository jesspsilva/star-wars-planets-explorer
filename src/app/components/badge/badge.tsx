import { EPlanetTerrains } from "@/app/types/terrains";

import * as Styled from "./badge.styles";

export interface BadgeProps {
  label: EPlanetTerrains;
  color?: string;
}

const defaultColor = "#b5b7c0";

export default function Badge({ label, color = defaultColor }: BadgeProps) {
  return (
    <Styled.BadgeWrapper label={label} color={color}>
      {label}
    </Styled.BadgeWrapper>
  );
}
