import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Select from "./Select";
import { FiltersContext } from "contexts/filters";
import { QueriesContext } from "contexts/queries";

describe("Select tests", () => {
  const filters = [{}, { items: [{}, {}] }, {}];
  const order = "asc:price";
  const setOrder = jest.fn();

  let anchor;

  beforeEach(() => {
    render(
      <FiltersContext.Provider value={{ filters }}>
        <QueriesContext.Provider value={{ order, setOrder }}>
          <Select />
        </QueriesContext.Provider>
      </FiltersContext.Provider>
    );

    anchor = screen.getByText("Sıralama");
  });

  test("should render anchor", () => {
    expect(anchor).toBeInTheDocument();
  });

  test("should render items when click anchor", () => {
    userEvent.click(anchor);

    const items = screen.getAllByTestId("selectItem");

    expect(items).toHaveLength(filters[1].items.length);
  });

  test("should call setter when clicked an item", () => {
    userEvent.click(anchor);

    const items = screen.getAllByTestId("selectItem");
    userEvent.click(items[0]);

    expect(setOrder).toHaveBeenCalled();
  });
});
