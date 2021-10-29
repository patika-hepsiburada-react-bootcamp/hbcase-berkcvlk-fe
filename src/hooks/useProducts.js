import { useContext } from "react";

import { ProductContext } from "contexts/products/products";

// To avoid import context and useContext everytime when it's needed
const useProducts = () => useContext(ProductContext);

export default useProducts;
