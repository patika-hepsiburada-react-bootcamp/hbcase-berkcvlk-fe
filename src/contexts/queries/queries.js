import { createContext, useCallback, useState } from "react";

/**
 * Context to get, set query, provide them
 */
export const QueriesContext = createContext(null);

const Provider = ({ children }) => {
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");

  /**
   * Stringify filter for api call
   * @return stringified filter
   * @example brand:apple,huawei;color:kirmizi
   */
  const stringifyFilter = useCallback(() => {
    return [
      { value: brand, token: "brand" },
      { value: color, token: "color" },
    ].reduce((query, variant) => {
      if (!variant.value.length) {
        return query;
      }

      // Check any variant added, if it's then add ; to separate them
      if (query && variant.value.length) {
        query += ";";
      }

      return query + `${variant.token}:${variant.value.join(",")}`;
    }, "");
  }, [brand, color]);

  /**
   * Toggle variant that can be array
   * @param {string} token color || brand
   * @param {string} value Value that will be use in filter
   */
  const toggleVariant = (token, value) => {
    const variants = {
      color: { set: setColor, val: color },
      brand: { set: setBrand, val: brand },
    };

    // If variant already in the array remove it
    if (variants[token].val.includes(value)) {
      return variants[token].set((prev) => prev.filter((val) => val !== value));
    }

    variants[token].set((prev) => [...prev, value]);
  };

  /**
   * Reset all filters
   */
  const resetFilters = () => {
    setBrand([]);
    setColor([]);
    setOrder("");
  };

  return (
    <QueriesContext.Provider
      value={{
        brand,
        color,
        order,
        search,
        setOrder,
        setSearch,
        resetFilters,
        toggleVariant,
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
