import * as Styled from "./badge.styles";

export interface BadgeProps {
  label: string;
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
