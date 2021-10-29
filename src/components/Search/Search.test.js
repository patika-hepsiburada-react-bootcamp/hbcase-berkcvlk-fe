import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";
import { QueriesContext } from "contexts/queries/queries";

describe("Search input tests", () => {
  test("should call setter one when type 3 chars", () => {
    const setSearch = jest.fn();

    render(
      <QueriesContext.Provider value={{ setSearch }}>
        <Search />
      </QueriesContext.Provider>
    );

    const input = screen.getByPlaceholderText(/25 milyon/i);

    userEvent.type(input, "app");

    setTimeout(() => expect(setSearch).toHaveBeenCalledTimes(1), 300);
  });
});
