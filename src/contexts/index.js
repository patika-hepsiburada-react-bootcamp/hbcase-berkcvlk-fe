import ProductsProvider from "./products";
import QueriesProvider from "./queries";
import PaginationProvider from "./pagination";
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
