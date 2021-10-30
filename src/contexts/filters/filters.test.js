import { render } from "@testing-library/react";

import FilterProvider, { FiltersContext } from "./filters";

describe("Filters Context test", () => {
  test("default values", () => {
    let defaultFilters, defaultsOrderActive;

    render(
      <FilterProvider>
        <FiltersContext.Consumer>
          {({ filters, orderActive }) => {
            defaultFilters = filters;
            defaultsOrderActive = orderActive;
          }}
        </FiltersContext.Consumer>
      </FilterProvider>
    );

    expect(defaultFilters).toHaveLength(0);
    expect(defaultsOrderActive).toMatch("");
  });
});
