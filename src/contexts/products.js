import { createContext, useState, useEffect } from "react";

import { usePagination, useFilters, useQueries } from "hooks";
import axios from "api/client";

/**
 * Context to get products, provide them
 */
export const ProductContext = createContext(null);

const Provider = ({ children }) => {
  console.log("render");
  /**
   * API Response contains:
   * => currentPage
   * => prodPerPage
   * => totalProdCount
   * => products
   * => filters
   */
  const [productList, setProductList] = useState([]);

  /**
   * Pagination Context states' setters
   */
  const { page, setPage, setTotalProductCount, setProductPerPage } = usePagination();

  /**
   * Filters Context states
   */
  const { setFilters } = useFilters();

  /**
   * Queries Context states
   */
  const {
    query: { filter, search },
  } = useQueries();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("", {
          params: {
            page: page,
            filter: filter,
            search: search,
          },
        });

        /**
         * Set all related states to provide
         */
        const { currentPage, prodPerPage, totalProdCount, products, filters } = data;

        setProductList(products);
        setPage(currentPage);
        setTotalProductCount(totalProdCount);
        setProductPerPage(prodPerPage);
        setFilters(filters);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Provider;
