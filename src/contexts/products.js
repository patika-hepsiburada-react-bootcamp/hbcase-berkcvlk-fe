import { createContext, useState } from "react";
import { useEffect } from "react";

import axios from "api/client";

/**
 * Context to get products, provide them
 */
export const ProductContext = createContext(null);

const Provider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("", {
          params: {
            page: 1,
            filter: "brand:huawei",
            search: "app",
          },
        });

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Provider;
