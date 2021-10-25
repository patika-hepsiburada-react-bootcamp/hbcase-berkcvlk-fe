import { Header, Sidebar } from "components";
import * as S from "./Products.styled";

const Products = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Sidebar />
        <S.Main>berk</S.Main>
      </S.Container>
    </>
  );
};

export default Products;
