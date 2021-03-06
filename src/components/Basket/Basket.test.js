import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BasketContext } from "contexts/basket/basket";
import { ModalContext } from "contexts/modal/modal";
import Basket from "./Basket";

describe("Basket tests", () => {
  let anchor;

  let basketItems = [
    { productId: 1, image: "/images/prod1.png", title: "Basket Item" },
    { productId: 2, image: "/images/prod1.png", title: "Basket Item" },
  ];

  beforeEach(() => {
    render(
      <BasketContext.Provider value={{ basketItems }}>
        <ModalContext.Provider value={{ showModal: jest.fn() }}>
          <Basket />
        </ModalContext.Provider>
      </BasketContext.Provider>
    );

    anchor = screen.getByText("Sepetim");
  });

  test("anchor should be in the document", () => {
    expect(anchor).toBeInTheDocument();
  });

  test("hover over the anchor should open the basket menu", () => {
    userEvent.hover(anchor);

    const items = screen.getAllByText("Basket Item");

    expect(items).toHaveLength(basketItems.length);
  });

  test("clicking the basket item should close the menu", () => {
    userEvent.hover(anchor);

    const menu = screen.getByTestId("menu");

    const removeItems = screen.getAllByText("Kaldır");
    userEvent.click(removeItems[0]);

    expect(menu).not.toBeInTheDocument();
  });

  test("notify bubble should be in document, and contains items length", () => {
    const bubble = screen.getByText(basketItems.length);

    expect(bubble).toBeInTheDocument();
  });
});

// Avoid before each rendering
describe("", () => {
  let basketItems = [];

  beforeEach(() => {
    render(
      <BasketContext.Provider value={{ basketItems }}>
        <Basket />
      </BasketContext.Provider>
    );
  });

  test("if there is no basket item no item text should be in the document", () => {
    const anchor = screen.getByText("Sepetim");
    userEvent.hover(anchor);

    const noItem = screen.getByText("Sepetinizde ürün bulunmamaktadır!");
    expect(noItem).toBeInTheDocument();
  });

  test("if there is no basket item bubble should not be in the document", () => {
    const bubble = screen.queryByText(basketItems.length);
    expect(bubble).toBeNull();
  });
});
