import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SubHeader from "./SubHeader";
import { QueriesContext } from "contexts/queries";
import { FiltersContext } from "contexts/filters";

describe("Subheader tests", () => {
  let search = "apple",
    brand = [],
    setSearch = jest.fn(),
    filters = [];

  // Subheader elements
  let title, dropdown;

  beforeEach(() => {
    render(
      <QueriesContext.Provider value={{ search, brand, setSearch }}>
        <FiltersContext.Provider value={{ filters }}>
          <SubHeader />
        </FiltersContext.Provider>
      </QueriesContext.Provider>
    );

    title = screen.getByText("Cep Telefonu");
    dropdown = screen.getByText("Sıralama");
  });

  test("should render elements (title, dropdown)", () => {
    expect(title).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
  });

  test("searched key should be render if it's exist", () => {
    const searchedKey = screen.getByText(search);
    expect(searchedKey).toBeInTheDocument();
  });

  test("delete should reset search key", () => {
    const deleteButton = screen.getByText("Sil");

    userEvent.click(deleteButton);

    expect(setSearch).toHaveBeenCalledTimes(1);
  });
});

// Avoid before each
describe("", () => {
  test("if there is no search key, subtitle should not be render", () => {
    render(
      <QueriesContext.Provider
        value={{ search: "", brand: [], setSearch: jest.fn() }}
      >
        <FiltersContext.Provider value={{ filters: [] }}>
          <SubHeader />
        </FiltersContext.Provider>
      </QueriesContext.Provider>
    );

    const searchedKey = screen.queryByText("Aranan Kelime");

    expect(searchedKey).toBeNull();
  });
});
