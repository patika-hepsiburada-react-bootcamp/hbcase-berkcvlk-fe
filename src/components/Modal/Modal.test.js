import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "./Modal";
import { ModalContext } from "contexts/modal";
import { BasketContext } from "contexts/basket";

// Append modal root div for portal
const root = document.createElement("div");
root.setAttribute("id", "modal");
document.body.appendChild(root);

describe("Modal tests", () => {
  const removeItem = jest.fn();
  const hideModal = jest.fn();
  const isOpen = true;
  const productId = 1;

  // Modal elements
  let title, body, successButton, failButton, backdrop;

  beforeEach(() => {
    render(
      <BasketContext.Provider value={{ removeItem }}>
        <ModalContext.Provider value={{ hideModal, isOpen, productId }}>
          <Modal />
        </ModalContext.Provider>
      </BasketContext.Provider>
    );

    title = screen.queryByText("Ürünü silmek istediğinize emin misiniz?");
    body = screen.queryByText(/Lorem/i);
    successButton = screen.queryByText("Evet");
    failButton = screen.queryByText("Hayır");
    backdrop = screen.queryByTestId("backdrop");
  });

  test("should render title, body, success-fail buttons, backdrop", () => {
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(successButton).toBeInTheDocument();
    expect(failButton).toBeInTheDocument();
    expect(backdrop).toBeInTheDocument();
  });

  test("fail-button should close the modal", () => {
    userEvent.click(failButton);

    expect(hideModal).toHaveBeenCalledTimes(1);
  });

  test("backdrop click should close the modal", () => {
    userEvent.click(backdrop);

    expect(hideModal).toHaveBeenCalledTimes(1);
  });

  test("success-button remove basket item and close the modal", () => {
    userEvent.click(successButton);

    expect(removeItem).toHaveBeenCalledTimes(1);
    expect(hideModal).toHaveBeenCalledTimes(1);
  });
});

describe("", () => {
  test("if isOpen false modal should not be render", () => {
    render(
      <ModalContext.Provider value={{ isOpen: false }}>
        <BasketContext.Provider value={{ removeItem: jest.fn() }}>
          <Modal />
        </BasketContext.Provider>
      </ModalContext.Provider>
    );

    const modal = screen.queryByText(/Ürünü/i);

    expect(modal).not.toBeInTheDocument();
  });
});
