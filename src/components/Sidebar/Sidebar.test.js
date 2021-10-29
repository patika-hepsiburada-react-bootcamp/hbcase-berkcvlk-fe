import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Sidebar from "./Sidebar";
import { QueriesContext } from "contexts/queries/queries";
import { FiltersContext } from "contexts/filters/filters";

describe("Sidebar tests", () => {
  const color = ["kirmizi"];
  const brand = ["apple"];
  const order = "asc:price";
  const resetFilters = jest.fn();
  const filters = [
    {
      title: "Renk",
      type: "color",
      items: [
        { text: "Gümüş", value: "gumus", count: 1 },
        { text: "Kırmızı", value: "kirmizi", count: 0 },
        { text: "Beyaz", value: "beyaz", count: 0 },
      ],
      multipleChoice: true,
    },
    {
      title: "Sıralama",
      type: "order",
      items: [
        { text: "En Düşük Fiyat", value: "asc:price" },
        { text: "En Yüksek Fiyat", value: "desc:price" },
        { text: "En Yeniler (AZ)", value: "asc:date" },
        { text: "En Yeniler (ZA)", value: "desc:date" },
      ],
    },
    {
      title: "Marka",
      type: "brand",
      items: [
        { text: "Apple", value: "apple", count: 1 },
        { text: "Samsung", value: "samsung", count: 0 },
        { text: "Huawei", value: "huawei", count: 0 },
      ],
      multipleChoice: true,
    },
  ];

  beforeEach(() => {
    render(
      <QueriesContext.Provider
        value={{ color, order, brand, resetFilters, toggleVariant: jest.fn() }}
      >
        <FiltersContext.Provider value={{ filters }}>
          <Sidebar />
        </FiltersContext.Provider>
      </QueriesContext.Provider>
    );
  });

  test("should render filters", () => {
    const filterColor = screen.getByText("Renk");
    const filterOrder = screen.getByText("Sıralama");
    const filterBrand = screen.getByText("Marka");

    expect(filterColor).toBeInTheDocument();
    expect(filterOrder).toBeInTheDocument();
    expect(filterBrand).toBeInTheDocument();
  });

  test("should render remove all button when clicked filter", () => {
    const filterBrandButton = screen.getByText("Apple");

    userEvent.click(filterBrandButton);

    expect(screen.getByText("Hepsini Kaldır")).toBeInTheDocument();
  });

  test("should remove all call reset function", () => {
    const filterBrandButton = screen.getByText("Apple");

    userEvent.click(filterBrandButton);
    userEvent.click(screen.getByText("Hepsini Kaldır"));

    expect(resetFilters).toHaveBeenCalled();
  });
});
