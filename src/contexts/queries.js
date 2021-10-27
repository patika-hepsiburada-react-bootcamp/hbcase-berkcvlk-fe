import { createContext, useState } from "react";

/**
 * Context to get, set query, provide them
 */
export const QueriesContext = createContext(null);

const Provider = ({ children }) => {
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");

  return (
    <QueriesContext.Provider
      value={{
        brand,
        setBrand,
        color,
        setColor,
        order,
        setOrder,
        search,
        setSearch,
      }}
    >
      {children}
    </QueriesContext.Provider>
  );
};

export default Provider;
