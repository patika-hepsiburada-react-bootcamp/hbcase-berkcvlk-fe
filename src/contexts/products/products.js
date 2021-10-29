import { createContext, useState, useEffect } from "react";

import { usePagination, useFilters, useQueries } from "hooks";
import axios from "api/client";

/**
 * Context to get products, provide them
 */
export const ProductContext = createContext(null);

const Provider = ({ children }) => {
  /**
   * API Response contains:
   * => currentPage
   * => prodPerPage
   * => totalProdCount
   * => products
   * => filters
   */
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    order,
  } = useQueries();

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      try {
        const { data } = await axios.get("", {
          params: { page, filter, search, order },
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
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [page, filter, search, order]);

  return (
    <ProductContext.Provider value={{ productList, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Provider;
