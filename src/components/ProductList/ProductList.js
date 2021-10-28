import Product from "./Product/Product";

import { useProducts, useBasket } from "hooks";
import * as S from "./ProductList.styled";

const ProductList = () => {
  const { productList } = useProducts();
  const { basketItems } = useBasket();

  if (!productList.length) {
    return <S.NoItemFound>Ürün bulunamadı!</S.NoItemFound>;
  }

  return (
    <S.List>
      {productList.map((product, index) => (
        <Product
          key={index}
          product={product}
          isAddedBasket={
            basketItems.findIndex((item) => item.productId === product.id) !== -1
          }
        />
      ))}
    </S.List>
  );
};

export default ProductList;
