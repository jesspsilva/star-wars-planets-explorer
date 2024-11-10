import { render, screen } from "@testing-library/react";
import React from "react";

import Error from "./error";

describe("Error component", () => {
  it("renders with default props", () => {
    render(<Error />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We encountered an issue while processing your request. Please try again later or check your connection."
      )
    ).toBeInTheDocument();

    const icon = screen.getByTestId("error-icon");
    expect(icon).toBeInTheDocument();
  });

  test("renders with custom props", () => {
    const customProps = {
      title: "Custom Error Title",
      description: "Custom error description",
    };

    render(<Error {...customProps} />);

    expect(screen.getByText(customProps.title)).toBeInTheDocument();
    expect(screen.getByText(customProps.description)).toBeInTheDocument();
  });
});
