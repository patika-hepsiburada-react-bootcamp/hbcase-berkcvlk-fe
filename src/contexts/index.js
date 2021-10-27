import ProductsProvider from "./products";
import QueriesProvider from "./queries";
import PaginationProvider from "./pagination";
import FiltersProvider from "./filters";

const ContextProviders = ({ children }) => {
  return (
    <QueriesProvider>
      <PaginationProvider>
        <FiltersProvider>
          <ProductsProvider>{children}</ProductsProvider>
        </FiltersProvider>
      </PaginationProvider>
    </QueriesProvider>
  );
};

export default ContextProviders;
