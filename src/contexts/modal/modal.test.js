import { render } from "@testing-library/react";

import ModalProvider, { ModalContext } from "./modal";

describe("Modal Context tests", () => {
  test("default values", () => {
    let defaultIsOpen, defaultProductId;

    render(
      <ModalProvider>
        <ModalContext.Consumer>
          {({ isOpen, productId }) => {
            defaultIsOpen = isOpen;
            defaultProductId = productId;
          }}
        </ModalContext.Consumer>
      </ModalProvider>
    );

    expect(defaultIsOpen).toBeFalsy();
    expect(defaultProductId).toBe(0);
  });
});
