import { render } from "@testing-library/react";

import ProductsProvider, { ProductContext } from "./products";
import PaginationProvider from "../pagination/pagination";
import FiltersProvider from "../filters/filters";
import QueriesProvider from "../queries/queries";

describe("Products Context test", () => {
  let testProductList, testIsLoading;

  test("default values", () => {
    render(
      <PaginationProvider>
        <FiltersProvider>
          <QueriesProvider>
            <ProductsProvider>
              <ProductContext.Consumer>
                {({ isLoading, productList }) => {
                  testIsLoading = isLoading;
                  testProductList = productList;
                }}
              </ProductContext.Consumer>
            </ProductsProvider>
          </QueriesProvider>
        </FiltersProvider>
      </PaginationProvider>
    );

    expect(testProductList).toHaveLength(0);
    expect(testIsLoading).toBeTruthy();
  });
});
