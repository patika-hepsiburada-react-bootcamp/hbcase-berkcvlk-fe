import { useContext } from "react";

import { QueriesContext } from "contexts/queries";

// To avoid import context and useContext everytime when it's needed
const useQueries = () => useContext(QueriesContext);

export default useQueries;
