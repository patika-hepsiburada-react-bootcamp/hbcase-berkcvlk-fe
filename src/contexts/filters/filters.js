import { createContext, useState } from "react";

/**
 * Context for filters on the page
 */
export const FiltersContext = createContext(null);

const Provider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [orderActive, setOrderActive] = useState("");

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, orderActive, setOrderActive }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default Provider;
