import { render } from "@testing-library/react";

import Spinner from "./spinner";

describe("Spinner component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
