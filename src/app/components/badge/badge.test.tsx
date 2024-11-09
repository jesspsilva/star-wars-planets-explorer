import { render, screen } from "@testing-library/react";

import Badge from "./badge";

describe("Badge component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Badge label="Badge" />);
    expect(container).toMatchSnapshot();
  });

  it("should render with default colors", () => {
    render(<Badge label="Badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveStyle({
      backgroundColor: "#b5b7c0",
      border: "1px solid #b5b7c0",
      color: "#b5b7c0",
    });
  });

  it("should render with custom colors when provided", () => {
    render(
      <Badge
        label="Badge"
        colors={{
          background: "BG_COLOR",
          border: "BORDER_COLOR",
        }}
      />
    );

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveStyle({
      backgroundColor: "BG_COLOR",
      border: "1px solid BORDER_COLOR",
      color: "BORDER_COLOR",
    });
  });

  it("should display custom label", () => {
    render(<Badge label="Badge Label" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveTextContent("Badge Label");
  });
});
