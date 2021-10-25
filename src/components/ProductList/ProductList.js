import Product from "./Product/Product";
import * as S from "./ProductList.styled";

const ProductList = () => {
  return (
    <S.List>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </S.List>
  );
};

export default ProductList;
