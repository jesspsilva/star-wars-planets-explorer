import { fireEvent, render, screen } from "@testing-library/react";

import { mockedPlanetsApiResponse } from "@mocks/planets-data";
import { mockedColumns } from "@mocks/table";

import TableDesktop from "./table-desktop";

jest.mock("@/app/utils/format-planet-details", () => ({
  formatPlanetDetails: (value: string) => value,
}));

const planetsData = mockedPlanetsApiResponse.results;

describe("TableDesktop", () => {
  const mockOnRowClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the table with correct headers", () => {
    render(
      <TableDesktop
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
      />
    );

    mockedColumns.forEach((column) => {
      expect(screen.getByText(column.name)).toBeInTheDocument();
    });
  });

  it("renders correct number of rows with correct data", () => {
    render(
      <TableDesktop
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
      />
    );

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
    render(
      <TableDesktop
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
      />
    );

    const firstRow = screen.getAllByTestId("desktop-table-row")[0];
    fireEvent.click(firstRow);

    expect(mockOnRowClick).toHaveBeenCalledTimes(1);
    expect(mockOnRowClick).toHaveBeenCalledWith(planetsData[0]);
  });

  it("applies hover styles when hovering over rows", () => {
    render(
      <TableDesktop
        data={planetsData}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
      />
    );

    const rows = screen.getAllByTestId("desktop-table-row");
    rows.forEach((row) => {
      expect(row).toHaveClass("hover:bg-blue-50");
      expect(row).toHaveClass("cursor-pointer");
    });
  });

  it("handles empty data array", () => {
    render(
      <TableDesktop
        data={[]}
        columns={mockedColumns}
        onRowClick={mockOnRowClick}
      />
    );

    mockedColumns.forEach((column) => {
      expect(screen.getByText(column.name)).toBeInTheDocument();
    });

    const rows = screen.queryAllByTestId("desktop-table-row");
    expect(rows).toHaveLength(0);
  });
});