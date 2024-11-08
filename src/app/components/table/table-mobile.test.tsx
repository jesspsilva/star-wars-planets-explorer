import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockedPlanetsApiResponse } from "@mocks/planets-data";
import { mockedColumns } from "@mocks/table";

import TableMobile from "./table-mobile";

jest.mock("@/app/utils/format-planet-details", () => ({
  formatPlanetDetails: (value: string) => value,
}));

const planetsData = mockedPlanetsApiResponse.results;
const mockOnRowClick = jest.fn();
const mockOnClearClick = jest.fn();

export const renderTableMobile = (props = {}) => {
  const defaultProps = {
    data: planetsData,
    columns: mockedColumns,
    onRowClick: mockOnRowClick,
    onClearClick: mockOnClearClick,
  };

  return render(<TableMobile {...defaultProps} {...props} />);
};

describe("TableMobile", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all data rows correctly", () => {
    render(
      <TableMobile
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
        onClearClick={mockOnClearClick}
      />
    );

    const rows = screen.getAllByTestId("mobile-table-row");
    expect(rows).toHaveLength(planetsData.length);
  });

  it("renders all cells with correct data", () => {
    render(
      <TableMobile
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
        onClearClick={mockOnClearClick}
      />
    );

    planetsData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.climate)).toBeInTheDocument();
      expect(screen.getByText(item.terrain)).toBeInTheDocument();
      expect(screen.getByText(item.population)).toBeInTheDocument();
      expect(screen.getByText(item.diameter)).toBeInTheDocument();
    });
  });

  it("applies correct data-label attributes to cells", () => {
    render(
      <TableMobile
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
        onClearClick={mockOnClearClick}
      />
    );

    const cells = screen.getAllByTestId("mobile-table-cell");
    cells.forEach((cell, index) => {
      const columnIndex = index % mockedColumns.length;
      expect(cell).toHaveAttribute(
        "data-label",
        mockedColumns[columnIndex].name
      );
    });
  });

  it("calls onRowClick with correct planet data when row is clicked", () => {
    render(
      <TableMobile
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
        onClearClick={mockOnClearClick}
      />
    );

    const firstRow = screen.getAllByTestId("mobile-table-row")[0];
    fireEvent.click(firstRow);

    expect(mockOnRowClick).toHaveBeenCalledTimes(1);
    expect(mockOnRowClick).toHaveBeenCalledWith(planetsData[0]);
  });

  it("applies hover and cursor styles to rows", () => {
    render(
      <TableMobile
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
        onClearClick={mockOnClearClick}
      />
    );

    const rows = screen.getAllByTestId("mobile-table-row");
    rows.forEach((row) => {
      expect(row).toHaveClass("hover:bg-blue-50");
      expect(row).toHaveClass("cursor-pointer");
    });
  });

  describe("when there's not data", () => {
    beforeEach(() => {
      render(
        <TableMobile
          data={[]}
          columns={mockedColumns}
          onRowClick={mockOnRowClick}
          onClearClick={mockOnClearClick}
        />
      );
    });

    it("should show empty state", () => {
      expect(screen.getByText("No data available.")).toBeInTheDocument();
    });

    it("should display a clear search button", () => {
      const clearButton = screen.getByRole("button", { name: /clear search/i });
      expect(clearButton).toBeInTheDocument();
    });

    describe("and we click in the clear button", () => {
      it("should trigger the onClearClick function", async () => {
        const clearButton = screen.getByRole("button", {
          name: /clear search/i,
        });
        await userEvent.click(clearButton);

        expect(mockOnClearClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
