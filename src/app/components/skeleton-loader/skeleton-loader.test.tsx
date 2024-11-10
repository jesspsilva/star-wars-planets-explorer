import { render, screen } from "@testing-library/react";

import SkeletonLoader from "./skeleton-loader";

describe("SkeletonLoader component", () => {
  it("renders the default number of skeleton items", () => {
    render(<SkeletonLoader />);

    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton.children).toHaveLength(7);
  });

  it("renders the custom number of skeleton items when provided", () => {
    render(<SkeletonLoader numberOfItems={3} />);

    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton.children).toHaveLength(3);
  });

  it("renders skeleton with the correct data-testid", () => {
    render(<SkeletonLoader numberOfItems={2} dataTestid="test" />);

    const parentDiv = screen.getByTestId("skeleton-loader-test");
    expect(parentDiv).toBeInTheDocument();
  });
});
