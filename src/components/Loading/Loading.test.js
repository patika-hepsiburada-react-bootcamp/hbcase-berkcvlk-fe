import { render } from "@testing-library/react";

import Loading from "./Loading";

describe("Loading tests", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<Loading />);

    const loading = getByTestId("loading");

    expect(loading).toBeInTheDocument();
  });
});
