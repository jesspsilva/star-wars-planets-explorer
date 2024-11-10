import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ColumnToggle from "./column-toggle";

const mockOnColumnToggle = jest.fn();

const columns = [
  { name: "Column 1", key: "col1", isVisible: true },
  { name: "Column 2", key: "col2", isVisible: true },
  { name: "Column 3", key: "col3", isVisible: true },
  { name: "Column 4", key: "col4", isVisible: true },
  { name: "Column 5", key: "col5", isVisible: true },
  { name: "Column 6", key: "col6", isVisible: true },
];

const renderColumnToggle = (props = {}) => {
  const defaultProps = {
    columns,
    onColumnToggle: mockOnColumnToggle,
  };

  return render(<ColumnToggle {...defaultProps} {...props} />);
};

describe("ColumnToggle component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the correct columns", async () => {
    renderColumnToggle();

    const toggleButton = screen.getByRole("button", { name: /columns/i });
    await userEvent.click(toggleButton);

    columns.forEach((column) => {
      expect(screen.getByText(column.name)).toBeInTheDocument();
    });
  });

  it("calls onColumnToggle when an entry is clicked", async () => {
    renderColumnToggle();

    const toggleButton = screen.getByRole("button", { name: /columns/i });
    await userEvent.click(toggleButton);
    await userEvent.click(screen.getByText("Column 1"));

    expect(mockOnColumnToggle).toHaveBeenCalledWith("col1");
  });

  it("does not call onColumnToggle when the column is disabled", async () => {
    const disabledColumns = [
      { name: "Column 1", key: "col1", isVisible: true },
      { name: "Column 2", key: "col2", isVisible: false },
    ];

    renderColumnToggle({
      columns: disabledColumns,
      minVisibleColumns: 1,
    });

    const toggleButton = screen.getByRole("button", { name: /columns/i });
    await userEvent.click(toggleButton);
    await userEvent.click(screen.getByText("Column 1"));

    expect(mockOnColumnToggle).not.toHaveBeenCalled();
  });

  it("enables columns when the visible columns count is above minVisibleColumns", async () => {
    renderColumnToggle({
      minVisibleColumns: 2,
    });

    const columnsToClick = ["Column 1", "Column 2", "Column 3"];

    for (const columnName of columnsToClick) {
      const toggleButton = screen.getByRole("button", { name: /columns/i });
      await userEvent.click(toggleButton);
      await userEvent.click(await screen.findByText(columnName));
    }

    expect(mockOnColumnToggle).toHaveBeenCalledTimes(3);
  });

  it("disables columns when visible columns count is below minVisibleColumns", async () => {
    const columnsBelowMin = [
      { name: "Column 1", key: "col1", isVisible: true },
      { name: "Column 2", key: "col2", isVisible: true },
    ];

    renderColumnToggle({
      columns: columnsBelowMin,
      minVisibleColumns: 3,
    });

    const toggleButton = screen.getByRole("button", { name: /columns/i });
    await userEvent.click(toggleButton);

    await userEvent.click(screen.getByText("Column 1"));
    await userEvent.click(screen.getByText("Column 2"));

    expect(mockOnColumnToggle).not.toHaveBeenCalled();
  });
});
