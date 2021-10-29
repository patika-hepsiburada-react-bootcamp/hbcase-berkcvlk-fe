import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Product from "./Product";
import { BasketContext } from "contexts/basket";

const product = {
  id: 1,
  title: "Title",
  price: 100,
  discountRate: 10,
  brand: {
    text: "Apple",
    value: "apple",
  },
  color: {
    text: "Kırmızı",
    value: "kirmizi",
  },
  image: "/images/image.png",
};

describe("Product tests", () => {
  const addItem = jest.fn();
  const isAddedBasket = false;

  // Product elements
  let image, title, details;

  beforeEach(() => {
    render(
      <BasketContext.Provider value={{ addItem }}>
        <Product product={product} isAddedBasket={isAddedBasket} />
      </BasketContext.Provider>
    );

    image = screen.getByAltText(product.title);
    title = screen.getByText(product.title);
    details = screen.getByTestId("details");
  });

  test("should render image, title, details", () => {
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });

  test("should render add basket button when hover", () => {
    userEvent.hover(title);

    const addBasketButton = screen.getByText("Sepete Ekle");

    expect(addBasketButton).toBeInTheDocument();
  });

  test("should call addItem when clicked add basket", () => {
    userEvent.hover(title);

    const addBasketButton = screen.getByText("Sepete Ekle");
    userEvent.click(addBasketButton);

    expect(addItem).toHaveBeenCalled();
  });
});

describe("", () => {
  test("add basket item should be disabled if added basket", () => {
    render(
      <BasketContext.Provider value={{ addItem: jest.fn() }}>
        <Product product={product} isAddedBasket={true} />
      </BasketContext.Provider>
    );

    const title = screen.getByText("Title");

    userEvent.hover(title);

    const addBasketButton = screen.getByText(/Bu ürünü/i);
    expect(addBasketButton).toHaveTextContent("Bu ürünü sepete ekleyemezsiniz!");
  });
});
