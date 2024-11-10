import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "@/app/components/modal/modal";
import { planetDetailsConfig } from "@/app/utils/planet-details-config";
import { mockedPlanetsApiResponse } from "@mocks/planets-data";

const mockPlanet = mockedPlanetsApiResponse.results[0];
const mockOnClose = jest.fn();

const renderModal = (props = {}) => {
  const defaultProps = {
    planet: mockPlanet,
    onClose: mockOnClose,
  };

  return render(<Modal {...defaultProps} {...props} />);
};

describe("Modal component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the planet name in the modal title", () => {
    renderModal();

    expect(screen.getByText(mockPlanet.name)).toBeInTheDocument();
  });

  it("renders all fields from planetDetailsConfig except 'name'", () => {
    renderModal();

    planetDetailsConfig
      .filter((config) => config.key !== "name")
      .forEach((config) => {
        const fieldContainer = screen.getByTestId(`field-${config.key}`);
        expect(
          within(fieldContainer).getByText(`${config.label}:`)
        ).toBeInTheDocument();
      });
  });

  it("calls onClose when the close button is clicked", async () => {
    renderModal();

    const closeButton = screen.getByTestId("modal-close-button");
    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when clicking outside of the modal content", async () => {
    renderModal();

    const backdrop = screen.getByRole("dialog");
    await userEvent.click(backdrop);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when clicking inside the modal content", async () => {
    renderModal();

    const modalContent = screen.getByText(mockPlanet.name).closest("div");
    if (modalContent) {
      await userEvent.click(modalContent);
    }

    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
