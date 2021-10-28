import Product from "./Product/Product";

import { useProducts } from "hooks";
import * as S from "./ProductList.styled";

const ProductList = () => {
  const { productList } = useProducts();

  if (!productList.length) {
    return <S.NoItemFound>Ürün bulunamadı!</S.NoItemFound>;
  }

  return (
    <S.List>
      {productList.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </S.List>
  );
};

export default ProductList;
