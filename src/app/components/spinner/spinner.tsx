import * as Styled from "./spinner.styles"

export default function Spinner() {
  return (
    <Styled.SpinnerContainer data-testid="loading-spinner">
      <Styled.SpinnerStyled></Styled.SpinnerStyled>
    </Styled.SpinnerContainer>
  );
}