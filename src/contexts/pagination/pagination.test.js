import { render } from "@testing-library/react";

import PaginationProvider, { PaginationContext } from "./pagination";

describe("Pagination Context tests", () => {
  test("default values", () => {
    let defaultPage, defaultProductPerPage, defaultTotalProductCount;

    render(
      <PaginationProvider>
        <PaginationContext.Consumer>
          {({ page, productPerPage, totalProductCount }) => {
            defaultPage = page;
            defaultProductPerPage = productPerPage;
            defaultTotalProductCount = totalProductCount;
          }}
        </PaginationContext.Consumer>
      </PaginationProvider>
    );

    expect(defaultPage).toBe(1);
    expect(defaultProductPerPage).toBeUndefined();
    expect(defaultTotalProductCount).toBeUndefined();
  });
});
