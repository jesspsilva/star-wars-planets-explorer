import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockedPlanetsApiResponse } from "@/app/__mocks__/planets-data";
import { mockedColumns } from "@/app/__mocks__/table";

import TableDesktop from "./table-desktop";

jest.mock("@/app/utils/format-planet-details", () => ({
  formatPlanetDetails: (value: string) => value,
}));

const planetsData = mockedPlanetsApiResponse.results;
const mockOnRowClick = jest.fn();
const mockOnClearClick = jest.fn();

const renderTableDesktop = (props = {}) => {
  const defaultProps = {
    data: planetsData,
    columns: mockedColumns,
    onRowClick: mockOnRowClick,
    onClearClick: mockOnClearClick,
    isLoading: false,
  };

  return render(<TableDesktop {...defaultProps} {...props} />);
};

describe("TableDesktop", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the table with correct headers", () => {
    renderTableDesktop();

    mockedColumns.forEach((column) => {
      expect(screen.getByText(column.name)).toBeInTheDocument();
    });
  });

  it("renders correct number of rows with correct data", () => {
    renderTableDesktop();

    const rows = screen.getAllByTestId("desktop-table-row");
    expect(rows).toHaveLength(planetsData.length);

    planetsData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.climate)).toBeInTheDocument();
      expect(screen.getByText(item.terrain)).toBeInTheDocument();
      expect(screen.getByText(item.population)).toBeInTheDocument();
      expect(screen.getByText(item.diameter)).toBeInTheDocument();
    });
  });

  it("calls onRowClick with correct data when row is clicked", () => {
    renderTableDesktop();

    const firstRow = screen.getAllByTestId("desktop-table-row")[0];
    fireEvent.click(firstRow);

    expect(mockOnRowClick).toHaveBeenCalledTimes(1);
    expect(mockOnRowClick).toHaveBeenCalledWith(planetsData[0]);
  });

  it("applies hover styles when hovering over rows", () => {
    renderTableDesktop();

    const rows = screen.getAllByTestId("desktop-table-row");
    rows.forEach((row) => {
      expect(row).toHaveClass("hover:bg-blue-50");
      expect(row).toHaveClass("cursor-pointer");
    });
  });

  it("handles empty data array", () => {
    renderTableDesktop({
      data: [],
    });

    mockedColumns.forEach((column) => {
      expect(screen.getByText(column.name)).toBeInTheDocument();
    });

    const rows = screen.queryAllByTestId("desktop-table-row");
    expect(rows).toHaveLength(0);
  });

  describe("when there's not data", () => {
    beforeEach(() => {
      renderTableDesktop({
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
      renderTableDesktop({
        isLoading: true,
      });
    });

    it("should show loading skeleton", () => {
      const skeletonDiv = screen.getByTestId("skeleton-loader-desktop");
      expect(skeletonDiv.children).toHaveLength(7);
    });
  });
});
