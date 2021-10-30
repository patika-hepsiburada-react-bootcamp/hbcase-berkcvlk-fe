import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ModalContext } from "contexts/modal/modal";
import BasketItem from "./BasketItem";

describe("Basket Item tests", () => {
  let removeButton, image, title;

  const showModal = jest.fn();
  const hideMenu = jest.fn();

  beforeEach(() => {
    render(
      <ModalContext.Provider value={{ showModal }}>
        <BasketItem
          item={{ productId: 1, image: "/images/prod1.png", title: "Basket Item" }}
          hideMenu={hideMenu}
        />
      </ModalContext.Provider>
    );

    removeButton = screen.getByText("Kaldır");
    image = screen.getByAltText("Basket Item");
    title = screen.getByText("Basket Item");
  });

  test("remove button, image and title should be in document", () => {
    expect(removeButton).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test("remove button should open the modal", () => {
    userEvent.click(removeButton);
    expect(hideMenu).toHaveBeenCalledTimes(1);
    expect(showModal).toHaveBeenCalledTimes(1);
  });
});
