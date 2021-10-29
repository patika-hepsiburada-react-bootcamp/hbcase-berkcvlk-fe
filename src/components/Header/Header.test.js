import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { QueriesContext } from "contexts/queries";
import { BasketContext } from "contexts/basket/basket";
import { FiltersContext } from "contexts/filters";

describe("Header tests", () => {
  let basketItems = [];
  let setSearch = jest.fn();
  let filters = [];
  let brand = [];

  // Header elements
  let basket, search, logo, subheader;

  beforeEach(() => {
    render(
      <QueriesContext.Provider value={{ setSearch, brand }}>
        <BasketContext.Provider value={{ basketItems }}>
          <FiltersContext.Provider value={{ filters }}>
            <Header />
          </FiltersContext.Provider>
        </BasketContext.Provider>
      </QueriesContext.Provider>
    );

    basket = screen.getByText("Sepetim");
    search = screen.getByPlaceholderText("25 milyon'dan fazla ürün içerisinde ara");
    logo = screen.getByAltText("Hepsiburada");
    subheader = screen.getByText("Cep Telefonu");
  });

  test("should render basket, search, logo, subheader elements", () => {
    expect(basket).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(subheader).toBeInTheDocument();
  });
});
