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

const renderTableMobile = (props = {}) => {
  const defaultProps = {
    data: planetsData,
    columns: mockedColumns,
    onRowClick: mockOnRowClick,
    onClearClick: mockOnClearClick,
    isLoading: false,
  };

  return render(<TableMobile {...defaultProps} {...props} />);
};

describe("TableMobile", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all data rows correctly", () => {
    renderTableMobile();

    const rows = screen.getAllByTestId("mobile-table-row");
    expect(rows).toHaveLength(planetsData.length);
  });

  it("renders all cells with correct data", () => {
    renderTableMobile();

    planetsData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.climate)).toBeInTheDocument();
      expect(screen.getByText(item.terrain)).toBeInTheDocument();
      expect(screen.getByText(item.population)).toBeInTheDocument();
      expect(screen.getByText(item.diameter)).toBeInTheDocument();
    });
  });

  it("applies correct data-label attributes to cells", () => {
    renderTableMobile();

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
    renderTableMobile();

    const firstRow = screen.getAllByTestId("mobile-table-row")[0];
    fireEvent.click(firstRow);

    expect(mockOnRowClick).toHaveBeenCalledTimes(1);
    expect(mockOnRowClick).toHaveBeenCalledWith(planetsData[0]);
  });

  it("applies hover and cursor styles to rows", () => {
    renderTableMobile();

    const rows = screen.getAllByTestId("mobile-table-row");
    rows.forEach((row) => {
      expect(row).toHaveClass("hover:bg-blue-50");
      expect(row).toHaveClass("cursor-pointer");
    });
  });

  describe("when there's not data", () => {
    beforeEach(() => {
      renderTableMobile({
        data: [],
      });
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

  describe("when data is loading", () => {
    beforeEach(() => {
      renderTableMobile({
        isLoading: true,
      });
    });

    it("should show loading skeleton", () => {
      const skeletonDiv = screen.getByTestId("skeleton-loader-mobile");
      expect(skeletonDiv.children).toHaveLength(8);
    });
  });
});
