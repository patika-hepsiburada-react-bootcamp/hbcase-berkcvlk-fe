import { createContext, useState } from "react";

/**
 * Context to get, set filters, provide them
 */
export const FiltersContext = createContext(null);

const Provider = ({ children }) => {
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  return <FiltersContext.Provider value={{}}>{children}</FiltersContext.Provider>;
};

export default Provider;
