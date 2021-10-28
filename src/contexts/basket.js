import { createContext, useState, useEffect } from "react";

import axios from "api/client";

/**
 * Context for basket
 */
export const BasketContext = createContext(null);

const Provider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * GET all basket items
   * and sync localstorage
   */
  useEffect(() => {
    setIsLoading(true);

    const getBasketItems = async () => {
      try {
        const { data } = await axios.get("/basket");
        setBasketItems(data.items);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getBasketItems();
  }, []);

  /**
   * Whenever basketItems change, sync localstorage
   */
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);

  /**
   * Add new item to the basket
   * @param {number} productId
   */
  const addItem = (productId) => {
    setIsLoading(true);

    const addBasketItem = async () => {
      try {
        const { data } = await axios.post("basket", {
          productId: productId,
        });

        setBasketItems(data.items);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    addBasketItem();
  };

  /**
   * Remove the item from the basket
   * @param {number} productId
   */
  const removeItem = (productId) => {
    setIsLoading(true);

    const removeItem = async () => {
      try {
        const { data } = await axios.delete("basket", {
          data: { productId: productId },
        });

        setBasketItems(data.items);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    removeItem();
  };

  return (
    <BasketContext.Provider value={{ basketItems, isLoading, addItem, removeItem }}>
      {children}
    </BasketContext.Provider>
  );
};

export default Provider;
