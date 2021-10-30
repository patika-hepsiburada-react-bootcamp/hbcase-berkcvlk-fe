import { act, render } from "@testing-library/react";

import ModalProvider, { ModalContext } from "./modal";

describe("Modal Context tests", () => {
  let defaultIsOpen, defaultProductId, testShowModal, testHideModal;

  beforeEach(() => {
    render(
      <ModalProvider>
        <ModalContext.Consumer>
          {({ isOpen, productId, showModal, hideModal }) => {
            defaultIsOpen = isOpen;
            defaultProductId = productId;
            testShowModal = showModal;
            testHideModal = hideModal;
          }}
        </ModalContext.Consumer>
      </ModalProvider>
    );
  });

  test("default values", () => {
    expect(defaultIsOpen).toBeFalsy();
    expect(defaultProductId).toBe(0);
  });

  test("showModal set isOpen true and set productId", () => {
    act(() => testShowModal(1));

    expect(defaultIsOpen).toBeTruthy();
    expect(defaultProductId).toBe(1);
  });

  test("hide modal set isOpen false", () => {
    act(() => testHideModal());

    expect(defaultIsOpen).toBeFalsy();
  });
});
