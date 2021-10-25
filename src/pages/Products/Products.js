import { Header, Sidebar, ProductList } from "components";
import * as S from "./Products.styled";

const Products = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Sidebar />
        <S.Main>
          <ProductList />
        </S.Main>
      </S.Container>
    </>
  );
};

export default Products;
