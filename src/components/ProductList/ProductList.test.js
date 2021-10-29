import { render, screen } from "@testing-library/react";

import ProductList from "./ProductList";
import { ProductContext } from "contexts/products";
import { BasketContext } from "contexts/basket";

const productList = [
  {
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
  },
  {
    id: 2,
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
  },
];

describe("Product List tests", () => {
  const basketItems = [{}];

  beforeEach(() => {});

  test("should render product list", () => {
    render(
      <ProductContext.Provider value={{ productList }}>
        <BasketContext.Provider value={{ basketItems }}>
          <ProductList />
        </BasketContext.Provider>
      </ProductContext.Provider>
    );

    const products = screen.getAllByText("Title");

    expect(products).toHaveLength(products.length);
  });

  test("should not render if product list has no item", () => {
    render(
      <ProductContext.Provider value={{ productList: [] }}>
        <BasketContext.Provider value={{ basketItems }}>
          <ProductList />
        </BasketContext.Provider>
      </ProductContext.Provider>
    );

    const noItem = screen.getByText("Ürün bulunamadı!");

    expect(noItem).toBeInTheDocument();
  });
});
