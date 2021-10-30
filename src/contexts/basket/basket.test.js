import { render } from "@testing-library/react";

import BasketProvider, { BasketContext } from "./basket";

describe("Basket Context tests", () => {
  let items, loading;

  beforeEach(() => {
    render(
      <BasketProvider>
        <BasketContext.Consumer>
          {({ basketItems, isLoading }) => {
            items = basketItems;
            loading = isLoading;
          }}
        </BasketContext.Consumer>
      </BasketProvider>
    );
  });

  test("default values", () => {
    expect(items).toHaveLength(0);
    expect(loading).toBeTruthy();
  });
});
