import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Filter from "./Filter";
import { QueriesContext } from "contexts/queries/queries";

const filter = {
  title: "title",
  type: "filter",
  items: [
    { text: "Text", value: "value", count: 2 },
    { text: "Text", value: "value", count: 4 },
  ],
  multipleChoice: true,
};

describe("Filter tests", () => {
  const setOrder = jest.fn();
  const toggleVariant = jest.fn();

  let title, items, counts;

  beforeEach(() => {
    render(
      <QueriesContext.Provider value={{ setOrder, toggleVariant }}>
        <Filter filter={filter} />
      </QueriesContext.Provider>
    );

    title = screen.getByText("title");
    items = screen.getAllByText("Text");
    counts = filter.items.map((item) => screen.getByText(`(${item.count})`));
  });

  test("should render title, items, count", () => {
    expect(title).toBeInTheDocument();
    expect(items).toHaveLength(2);
    counts.forEach((count, index) =>
      expect(count).toHaveTextContent(filter.items[index].count)
    );
  });

  test("should call toggle setter when clicked filter item", () => {
    userEvent.click(items[0]);

    expect(toggleVariant).toBeCalled();
  });
});

describe("", () => {
  const setOrder = jest.fn();
  const toggleVariant = jest.fn();

  const filter = {
    title: "title",
    type: "filter",
    items: [
      { text: "Text", value: "value", count: 2 },
      { text: "Text", value: "value", count: 4 },
    ],
  };

  test("should call order setter when clicked filter item", () => {
    render(
      <QueriesContext.Provider value={{ setOrder, toggleVariant }}>
        <Filter filter={filter} />
      </QueriesContext.Provider>
    );

    const items = screen.getAllByText("Text");

    userEvent.click(items[0]);

    expect(setOrder).toBeCalled();
  });
});
