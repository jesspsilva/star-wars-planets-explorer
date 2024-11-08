import { fireEvent, render, screen } from "@testing-library/react";

import { mockedPlanetsApiResponse } from "@mocks/planets-data";
import { mockedColumns } from "@mocks/table";

import TableMobile from "./table-mobile";

jest.mock("@/app/utils/format-planet-details", () => ({
  formatPlanetDetails: (value: string) => value,
}));

const planetsData = mockedPlanetsApiResponse.results;

describe("TableMobile", () => {
  const mockOnRowClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all data rows correctly", () => {
    render(
      <TableMobile
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
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
      />
    );

    const rows = screen.getAllByTestId("mobile-table-row");
    rows.forEach((row) => {
      expect(row).toHaveClass("hover:bg-blue-50");
      expect(row).toHaveClass("cursor-pointer");
    });
  });
});
