import { useProducts } from "hooks";
import { Header, Sidebar, ProductList, Pagination } from "components";
import * as S from "./Products.styled";

const Products = () => {
  const { isLoading } = useProducts();

  return (
    <>
      <Header />
      <S.Container>
        <Sidebar />
        {!isLoading && (
          <S.Main>
            <ProductList />
            <Pagination />
          </S.Main>
        )}
      </S.Container>
    </>
  );
};

export default Products;
