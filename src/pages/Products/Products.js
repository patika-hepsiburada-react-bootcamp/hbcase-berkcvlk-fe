import { Header, Sidebar, ProductList, Pagination } from "components";
import * as S from "./Products.styled";

const Products = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Sidebar />
        <S.Main>
          <ProductList />
          <Pagination />
        </S.Main>
      </S.Container>
    </>
  );
};

export default Products;
