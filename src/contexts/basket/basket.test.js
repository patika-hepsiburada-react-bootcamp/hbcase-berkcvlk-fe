import { render } from "@testing-library/react";

import BasketProvider, { BasketContext } from "./basket";

describe("Basket Context tests", () => {
  test("default values", () => {
    let items;

    render(
      <BasketProvider>
        <BasketContext.Consumer>
          {({ basketItems }) => {
            items = basketItems;
          }}
        </BasketContext.Consumer>
      </BasketProvider>
    );

    expect(items).toHaveLength(0);
  });
});
