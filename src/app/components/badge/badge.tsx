import * as Styled from "./badge.styles";

import type { IPlanateDetailsColors } from "@/app/types/colors";

export interface BadgeProps {
  label: string;
  colors?: IPlanateDetailsColors;
}

const defaultColor = {
  border: "#b5b7c0",
  background: "#b5b7c0",
};

export default function Badge({ label, colors = defaultColor }: BadgeProps) {
  return (
    <Styled.BadgeWrapper label={label} colors={colors} data-testid="badge">
      {label}
    </Styled.BadgeWrapper>
  );
}
