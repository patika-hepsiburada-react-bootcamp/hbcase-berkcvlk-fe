import React, { createContext, useState, useCallback } from "react";

/**
 * Context to get, set filters, provide them
 */
export const PaginationContext = createContext(null);

const Provider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState();
  const [totalProductCount, setTotalProductCount] = useState();

  const calculatePageCount = useCallback(() => {
    return Math.ceil(totalProductCount / productPerPage);
  }, [totalProductCount, productPerPage]);

  return (
    <PaginationContext.Provider
      value={{
        setPage,
        setTotalProductCount,
        setProductPerPage,
        totalProductCount,
        productPerPage,
        page,
        pageCount: calculatePageCount(),
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default Provider;
