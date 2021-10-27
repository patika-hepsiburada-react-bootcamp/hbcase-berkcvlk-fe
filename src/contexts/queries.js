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

  const stringifyFilter = () => {
    return "brand:apple,huawei;color:kirmizi";
  };

  const toggleBrand = (brandValue) => {
    if (brand.includes(brandValue)) {
      return setBrand((prev) => prev.filter((br) => br !== brand));
    }

    setBrand((prev) => [...prev, brandValue]);
  };

  const toggleColor = (colorValue) => {
    if (color.includes(colorValue)) {
      return setColor((prev) => prev.filter((clr) => clr !== colorValue));
    }

    setColor((prev) => [...prev, colorValue]);
  };

  return (
    <QueriesContext.Provider
      value={{
        brand,
        toggleBrand,
        color,
        toggleColor,
        order,
        setOrder,
        search,
        setSearch,
        query: {
          filter: stringifyFilter(),
          search: search,
        },
      }}
    >
      {children}
    </QueriesContext.Provider>
  );
};

export default Provider;
