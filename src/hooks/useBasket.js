import { useContext } from "react";

import { BasketContext } from "contexts/basket";

// To avoid import context and useContext everytime when it's needed
const useBasket = () => useContext(BasketContext);

export default useBasket;
