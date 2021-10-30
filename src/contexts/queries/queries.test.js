import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import QueriesProvider, { QueriesContext } from "./queries";

describe("Queries Context tests", () => {
  let testBrand,
    testColor,
    testOrder,
    testSearch,
    testQuery,
    togglerForVariants,
    testResetFilters;

  beforeEach(() => {
    render(
      <QueriesProvider>
        <QueriesContext.Consumer>
          {({
            brand,
            toggleVariant,
            query: { filter },
            color,
            order,
            search,
            resetFilters,
          }) => {
            testBrand = brand;
            testColor = color;
            testOrder = order;
            testSearch = search;
            togglerForVariants = toggleVariant;
            testQuery = filter;
            testResetFilters = resetFilters;
          }}
        </QueriesContext.Consumer>
      </QueriesProvider>
    );
  });

  test("default values", () => {
    expect(testBrand).toHaveLength(0);
    expect(testColor).toHaveLength(0);
    expect(testOrder).toMatch("");
    expect(testSearch).toMatch("");
  });

  test("adding variant", () => {
    act(() => togglerForVariants("brand", "apple"));

    expect(testBrand).toEqual(["apple"]);
  });

  test("removing variant", () => {
    act(() => togglerForVariants("brand", "apple"));
    act(() => togglerForVariants("brand", "apple"));

    expect(testBrand).toHaveLength(0);
  });

  test("stringified query", () => {
    act(() => togglerForVariants("brand", "apple"));
    act(() => togglerForVariants("color", "kirmizi"));

    expect(testQuery).toEqual("brand:apple;color:kirmizi");
  });

  test("reset all filters", () => {
    act(() => togglerForVariants("brand", "apple"));
    act(() => togglerForVariants("color", "kirmizi"));
    act(() => testResetFilters());

    expect(testBrand).toHaveLength(0);
    expect(testColor).toHaveLength(0);
    expect(testOrder).toMatch("");
  });
});
