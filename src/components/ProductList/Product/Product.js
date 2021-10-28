import { useState } from "react";

import { useBasket } from "hooks";
import * as S from "./Product.styled";

const Product = ({ product, isAddedBasket }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const { brand, color, discountRate, title, price, image, id } = product;
  const { addItem } = useBasket();

  const mouseHoverRenderer = () => {
    if (isMouseEntered) {
      return (
        <S.AddToBasketButton disabled={isAddedBasket} onClick={() => addItem(id)}>
          {isAddedBasket ? "Bu ürünü sepete ekleyemezsiniz!" : "Sepete Ekle"}
        </S.AddToBasketButton>
      );
    }

    return (
      <>
        <S.Details>
          <S.Detail>
            <S.DetailTitle>Marka:</S.DetailTitle>
            <S.DetailDesc>{brand.text}</S.DetailDesc>
          </S.Detail>
          <S.Detail>
            <S.DetailTitle>Renk:</S.DetailTitle>
            <S.DetailDesc>{color.text}</S.DetailDesc>
          </S.Detail>
        </S.Details>
        <S.Price>{(price * ((100 - discountRate) / 100)).toFixed(2)} TL</S.Price>
        <S.PreviousPriceTag>
          <S.OldPrice>{price.toFixed(2)} TL</S.OldPrice>
          <S.Discount>{discountRate}%</S.Discount>
        </S.PreviousPriceTag>
      </>
    );
  };

  return (
    <S.Card
      isMouseEntered={isMouseEntered}
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
    >
      <S.ImageContainer isMouseEntered={isMouseEntered}>
        <S.Image src={image} />
      </S.ImageContainer>
      <S.Body>
        <S.Title>{title}</S.Title>
        {mouseHoverRenderer()}
      </S.Body>
    </S.Card>
  );
};

export default Product;
