import ProductsProvider from "./products/products";
import QueriesProvider from "./queries/queries";
import PaginationProvider from "./pagination/pagination";
import FiltersProvider from "./filters/filters";
import BasketProvider from "./basket/basket";
import ModalContext from "./modal/modal";

const ContextProviders = ({ children }) => {
  return (
    <QueriesProvider>
      <PaginationProvider>
        <FiltersProvider>
          <BasketProvider>
            <ModalContext>
              <ProductsProvider>{children}</ProductsProvider>
            </ModalContext>
          </BasketProvider>
        </FiltersProvider>
      </PaginationProvider>
    </QueriesProvider>
  );
};

export default ContextProviders;
