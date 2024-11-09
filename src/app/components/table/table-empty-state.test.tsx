import { fireEvent, render, screen } from "@testing-library/react";

import TableEmptyState from "./table-empty-state";

describe("TableEmptyState component", () => {
  const mockOnClearClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderEmptyState = () => {
    return render(<TableEmptyState onClearClick={mockOnClearClick} />);
  };

  it("renders the file icon", () => {
    renderEmptyState();

    const icon = screen.getByTestId("table-empty-state-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("width", "80");
    expect(icon).toHaveAttribute("height", "80");
  });

  it("renders the empty state messages", () => {
    renderEmptyState();

    expect(screen.getByText("No data available.")).toBeInTheDocument();
    expect(
      screen.getByText("Try to adjust your search params or get back soon.")
    ).toBeInTheDocument();
  });

  it("renders clear button with icon", () => {
    renderEmptyState();

    const clearButton = screen.getByRole("button", { name: /clear search/i });
    expect(clearButton).toBeInTheDocument();
    expect(screen.getByTestId("table-empty-state-icon")).toBeInTheDocument();
  });

  it("calls onClearClick when clear button is clicked", () => {
    renderEmptyState();
    const clearButton = screen.getByRole("button", { name: /clear search/i });

    fireEvent.click(clearButton);

    expect(mockOnClearClick).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const { container } = renderEmptyState();
    expect(container).toMatchSnapshot();
  });
});
