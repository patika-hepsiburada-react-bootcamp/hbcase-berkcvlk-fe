import React, { createContext, useState } from "react";

/**
 * Context to get, set filters, provide them
 */
export const PaginationContext = createContext(null);

const Provider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(1);
  const [totalProductCount, setTotalProductCount] = useState(1);

  const calculatePageCount = () => {
    return Math.ceil(totalProductCount / productPerPage);
  };

  return (
    <PaginationContext.Provider
      value={{
        setPage,
        setTotalProductCount,
        setProductPerPage,
        pageCount: calculatePageCount(),
        currentPage: page,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default Provider;
