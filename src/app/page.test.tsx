import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockedUsePlanets } from "../__mocks__/hooks";
import { mockedPlanetsApiResponse } from "../__mocks__/planets-data";

import Home from "./page";

jest.mock("@/app/utils/debounce", () => ({
  debounce: (fn: Function) => fn,
}));

jest.mock("./hooks/use-planets");

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockedUsePlanets.mockReturnValue({
      data: mockedPlanetsApiResponse,
      isPending: false,
      error: null,
    });
  });

  describe("Initial Render", () => {
    it("should show loading spinner on first load", () => {
      mockedUsePlanets.mockReturnValue({
        data: null,
        isPending: true,
        error: null,
      });

      render(<Home />);
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    });

    it("should show error message when API fails", () => {
      const errorMessage = "An error has occurred:";
      mockedUsePlanets.mockReturnValue({
        data: null,
        isPending: false,
        error: new Error(errorMessage),
      });

      render(<Home />);
      expect(screen.getByRole("alert")).toHaveTextContent(errorMessage);
    });

    it("should render planets table with correct data", () => {
      render(<Home />);

      const table = screen.getByTestId("data-table");
      const rows = within(table).getAllByRole("row");

      expect(rows.length).toBeGreaterThanOrEqual(2);

      const firstRowCells = within(rows[0]).getAllByTestId(
        "desktop-table-cell"
      );
      expect(firstRowCells[0]).toHaveTextContent("Tatooine");

      const secondRowCells = within(rows[1]).getAllByTestId(
        "desktop-table-cell"
      );
      expect(secondRowCells[0]).toHaveTextContent("Alderaan");
    });

    it("should show correct pagination info", () => {
      render(<Home />);

      expect(
        screen.getByText("Showing 1-10 results of 60")
      ).toBeInTheDocument();
    });
  });

  describe("Search Functionality", () => {
    it("should update search input value", async () => {
      render(<Home />);

      const searchInput = screen.getByPlaceholderText("Search for a planet");
      await userEvent.type(searchInput, "Tatooine");

      expect(searchInput).toHaveValue("Tatooine");
    });

    it("should trigger new search and reset page to 1", async () => {
      render(<Home />);

      const searchInput = screen.getByPlaceholderText("Search for a planet");
      await userEvent.type(searchInput, "Tatooine");

      expect(mockedUsePlanets).toHaveBeenCalledWith(1, "Tatooine");
    });

    it("should clear the input value after inserting some value and then clearing", async () => {
      render(<Home />);

      const searchInput = screen.getByPlaceholderText("Search for a planet");
      await userEvent.type(searchInput, "Alderaan");
      const clearButton = screen.getByTestId("search-input-clear-button");
      await userEvent.click(clearButton);

      expect(mockedUsePlanets).toHaveBeenCalledWith(1, "");
    });
  });

  describe("Column Toggle Functionality", () => {
    it("should toggle column visibility", async () => {
      render(<Home />);

      // Open column toggle
      const toggleButton = screen.getByRole("button", { name: /columns/i });
      await userEvent.click(toggleButton);

      // Toggle a column
      const climateToggle = screen.getByRole("menuitemcheckbox", {
        name: /climate/i,
      });
      await userEvent.click(climateToggle);

      // Verify column is not visible
      expect(screen.queryByText("arid")).not.toBeInTheDocument();
      expect(screen.queryByText("climate")).not.toBeInTheDocument();
    });
  });

  describe("Modal Functionality", () => {
    it("should open modal with planet details when row is clicked", async () => {
      render(<Home />);

      const table = screen.getByTestId("data-table");
      const rows = within(table).getAllByRole("row");

      // Click on a planet row
      fireEvent.click(rows[0]!);

      // Verify modal is shown with planet details
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(
        screen.getByText("Tatooine", { selector: "h2" })
      ).toBeInTheDocument();
    });

    it("should close modal when close button is clicked", async () => {
      render(<Home />);

      // Open modal
      const table = screen.getByTestId("data-table");
      const rows = within(table).getAllByRole("row");

      // Click on a planet row
      fireEvent.click(rows[0]!);

      // Close modal
      const closeButton = screen.getByTestId("modal-close-button");
      await userEvent.click(closeButton);

      // Verify modal is closed
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("Pagination Functionality", () => {
    it("should update page number when Next button is clicked", async () => {
      render(<Home />);

      // Initial state for the mock
      mockedUsePlanets.mockReturnValueOnce({
        data: [],
        page: 1,
        totalPages: 3,
      });

      // Find and click the "Next" button
      const nextPageButton = screen.getByRole("button", { name: /next/i });
      await userEvent.click(nextPageButton);

      // Verify usePlanets was called with page 2
      expect(mockedUsePlanets).toHaveBeenCalledWith(2, "");
    });

    it("should update results info when page changes", async () => {
      render(<Home />);

      // Click next page
      const nextPageButton = screen.getByRole("button", { name: /next/i });
      await userEvent.click(nextPageButton);

      // Mock new data for page 2
      mockedUsePlanets.mockReturnValue({
        data: {
          ...mockedPlanetsApiResponse,
          previous: "http://example.com/?page=1",
        },
        isPending: false,
        error: null,
      });

      // Verify showing correct range
      await waitFor(() => {
        expect(
          screen.getByText("Showing 11-20 results of 60")
        ).toBeInTheDocument();
      });
    });
  });

  describe("Loading States", () => {
    it("should show loading indicator when fetching new page", async () => {
      // Initial render
      render(<Home />);

      // Mock loading state
      mockedUsePlanets.mockReturnValue({
        data: mockedPlanetsApiResponse,
        isPending: true,
        error: null,
      });

      // Click next page
      const nextPageButton = screen.getByRole("button", { name: /next/i });
      await userEvent.click(nextPageButton);

      // Verify loading indicator is shown
      expect(screen.getByTestId("skeleton-loader-desktop")).toBeVisible();
    });
  });
});
