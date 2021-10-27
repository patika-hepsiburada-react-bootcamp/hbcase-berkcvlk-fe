import { createContext } from "react";

/**
 * Context for filters on the page
 */
const FiltersContext = createContext(null);

const Provider = ({ children }) => {
  return <FiltersContext.Provider>{children}</FiltersContext.Provider>;
};

export default Provider;
