import { createContext, useState } from "react";

/**
 * Context for modal on the page
 */
export const ModalContext = createContext(null);

const Provider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState(0);

  /**
   * Product id will use in modal
   */
  const showModal = (productId) => {
    setIsOpen(true);
    setProductId(productId);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, hideModal, productId, showModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default Provider;
