import { SunIcon } from "@radix-ui/react-icons";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import IconWithTooltip from "@/app/components/icon-with-tooltip/icon-with-tooltip";

describe("iconWithTooltip component", () => {
  it("renders the default icon when no icon is provided", () => {
    render(<IconWithTooltip tooltipText="Default Tooltip" />);

    const defaultIcon = screen.getByTestId("tooltip-icon");
    expect(defaultIcon).toBeInTheDocument();
  });

  it("renders a custom icon when provided", () => {
    render(<IconWithTooltip Icon={SunIcon} tooltipText="Custom Tooltip" />);

    const customIcon = screen.getByTestId("tooltip-icon");
    expect(customIcon).toBeInTheDocument();
  });

  it("displays tooltip text on hover", async () => {
    const tooltipText = "Hover Tooltip";
    render(<IconWithTooltip tooltipText={tooltipText} />);

    const icon = screen.getByTestId("tooltip-icon");
    await userEvent.hover(icon);

    const tooltip = await screen.findByRole("tooltip"); 
    expect(within(tooltip).getByText(tooltipText)).toBeVisible();
  });
});
