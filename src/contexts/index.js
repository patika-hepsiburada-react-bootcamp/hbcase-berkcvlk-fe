import ProductsProvider from "./products";
import QueriesProvider from "./queries";
import PaginationProvider from "./pagination";
import FiltersProvider from "./filters";
import BasketProvider from "./basket";

const ContextProviders = ({ children }) => {
  return (
    <QueriesProvider>
      <PaginationProvider>
        <FiltersProvider>
          <BasketProvider>
            <ProductsProvider>{children}</ProductsProvider>
          </BasketProvider>
        </FiltersProvider>
      </PaginationProvider>
    </QueriesProvider>
  );
};

export default ContextProviders;
