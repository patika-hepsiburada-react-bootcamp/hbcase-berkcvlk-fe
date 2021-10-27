import { useContext } from "react";

import { PaginationContext } from "contexts/pagination";

// To avoid import context and useContext everytime when it's needed
const usePagination = () => useContext(PaginationContext);

export default usePagination;
