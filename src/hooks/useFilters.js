import { useContext } from "react";

import { FiltersContext } from "contexts/filters";

// To avoid import context and useContext everytime when it's needed
const useFilters = () => useContext(FiltersContext);

export default useFilters;
