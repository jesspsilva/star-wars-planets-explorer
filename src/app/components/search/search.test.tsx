import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./search";

describe("Search component", () => {
  const defaultProps = {
    value: "",
    placeholder: "Search items...",
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with provided placeholder", () => {
    render(<Search {...defaultProps} />);

    expect(screen.getByPlaceholderText("Search items...")).toBeInTheDocument();
  });

  it("displays the provided value", () => {
    render(<Search {...defaultProps} value="test value" />);

    expect(screen.getByTestId("search-input")).toHaveValue("test value");
  });

  it("calls onChange when user types", async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} />);

    const input = screen.getByTestId("search-input");
    await user.type(input, "h");

    expect(defaultProps.onChange).toHaveBeenCalledWith("h");
  });

  it("clears input when clear button is clicked", async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} value="test value" />);

    const clearButton = screen.getByTestId("search-input-clear-button");
    await user.click(clearButton);

    expect(defaultProps.onChange).toHaveBeenCalledWith("");
  });
  
  it("handles multiple input changes correctly", async () => {
    const user = userEvent.setup();
    render(<Search {...defaultProps} />);

    const input = screen.getByTestId("search-input");
    await user.type(input, "t");
    expect(defaultProps.onChange).toHaveBeenCalledWith("t");

    await user.clear(input);
    await user.type(input, "n");
    expect(defaultProps.onChange).toHaveBeenCalledWith("n");
  });
});
