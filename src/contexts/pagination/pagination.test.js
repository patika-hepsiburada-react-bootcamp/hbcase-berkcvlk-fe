import { act, render } from "@testing-library/react";

import PaginationProvider, { PaginationContext } from "./pagination";

describe("Pagination Context tests", () => {
  let defaultPage,
    defaultProductPerPage,
    defaultTotalProductCount,
    testSetTotalProductCount,
    testSetProductPerPage,
    testPageCount;

  beforeEach(() => {
    render(
      <PaginationProvider>
        <PaginationContext.Consumer>
          {({
            page,
            productPerPage,
            totalProductCount,
            pageCount,
            setTotalProductCount,
            setProductPerPage,
          }) => {
            defaultPage = page;
            defaultProductPerPage = productPerPage;
            defaultTotalProductCount = totalProductCount;
            testSetProductPerPage = setProductPerPage;
            testSetTotalProductCount = setTotalProductCount;
            testPageCount = pageCount;
          }}
        </PaginationContext.Consumer>
      </PaginationProvider>
    );
  });

  test("default values", () => {
    expect(defaultPage).toBe(1);
    expect(defaultProductPerPage).toBeUndefined();
    expect(defaultTotalProductCount).toBeUndefined();
  });

  test("product per page change should change page count", () => {
    act(() => testSetProductPerPage(1));
    act(() => testSetTotalProductCount(3));

    expect(testPageCount).toBe(3);
  });
});
