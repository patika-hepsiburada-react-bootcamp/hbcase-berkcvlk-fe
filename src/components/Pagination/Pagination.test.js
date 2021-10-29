import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pagination from "./Pagination";
import { PaginationContext } from "contexts/pagination";

describe("Pagination tests", () => {
  let page = 2;
  const setPage = jest.fn();
  const pageCount = 3;
  const totalProductCount = 34;
  const productPerPage = 12;

  // Pagination elements
  let previousPageBtn, nextPageBtn, pageBtns;

  beforeEach(() => {
    render(
      <PaginationContext.Provider
        value={{ page, setPage, pageCount, totalProductCount, productPerPage }}
      >
        <Pagination />
      </PaginationContext.Provider>
    );

    previousPageBtn = screen.getByText("<");
    nextPageBtn = screen.getByText(">");
    pageBtns = screen.getAllByTestId("pageBtn");
  });

  test("should render all page buttons and prev, next buttons", () => {
    expect(previousPageBtn).toBeInTheDocument();
    expect(nextPageBtn).toBeInTheDocument();
    expect(pageBtns).toHaveLength(pageCount);
  });

  test("clicking previous button should call setter", () => {
    userEvent.click(previousPageBtn);

    expect(setPage).toHaveBeenCalledTimes(1);
  });

  test("clicking next button should call setter", () => {
    userEvent.click(nextPageBtn);

    expect(setPage).toHaveBeenCalledTimes(1);
  });

  test("clicking page button should call setter", () => {
    pageBtns.forEach((btn) => userEvent.click(btn));

    expect(setPage).toHaveBeenCalledTimes(pageBtns.length);
  });
});

describe("", () => {
  test("previous btn should not call setter if current page is 1", () => {
    const setPage = jest.fn();

    render(
      <PaginationContext.Provider
        value={{
          page: 1,
          setPage,
        }}
      >
        <Pagination />
      </PaginationContext.Provider>
    );

    const previousPageBtn = screen.getByText("<");

    userEvent.click(previousPageBtn);

    expect(setPage).not.toHaveBeenCalled();
  });

  test("next btn should not call setter if current page equals pages count", () => {
    const setPage = jest.fn();
    const pageCount = 3;

    render(
      <PaginationContext.Provider
        value={{
          page: 3,
          setPage,
          pageCount,
        }}
      >
        <Pagination />
      </PaginationContext.Provider>
    );

    const nextPageBtn = screen.getByText(">");

    userEvent.click(nextPageBtn);

    expect(setPage).not.toHaveBeenCalled();
  });

  test("should call setter if pages count smaller than current page", () => {
    const setPage = jest.fn();
    const pageCount = 3;

    render(
      <PaginationContext.Provider
        value={{
          page: 4,
          setPage,
          pageCount,
        }}
      >
        <Pagination />
      </PaginationContext.Provider>
    );

    expect(setPage).toHaveBeenCalled();
  });

  test("should not render pagination if product per page greater or equal to total product count", () => {
    render(
      <PaginationContext.Provider
        value={{
          productPerPage: 4,
          totalProductCount: 3,
        }}
      >
        <Pagination />
      </PaginationContext.Provider>
    );

    const previousPageBtn = screen.queryByText("<");

    expect(previousPageBtn).not.toBeInTheDocument();
  });
});
