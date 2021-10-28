import React, { createContext, useState, useCallback } from "react";

/**
 * Context to get, set filters, provide them
 */
export const PaginationContext = createContext(null);

const Provider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(1);
  const [totalProductCount, setTotalProductCount] = useState(1);

  const calculatePageCount = useCallback(() => {
    return Math.ceil(totalProductCount / productPerPage);
  }, [totalProductCount, productPerPage]);

  return (
    <PaginationContext.Provider
      value={{
        setPage,
        setTotalProductCount,
        setProductPerPage,
        page,
        pageCount: calculatePageCount(),
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default Provider;
