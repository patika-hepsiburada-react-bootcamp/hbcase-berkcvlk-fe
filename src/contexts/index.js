import ProductsProvider from "./products";
import FiltersProvider from "./filters";

const ContextProviders = ({ children }) => {
  return (
    <ProductsProvider>
      <FiltersProvider>{children}</FiltersProvider>
    </ProductsProvider>
  );
};

export default ContextProviders;
