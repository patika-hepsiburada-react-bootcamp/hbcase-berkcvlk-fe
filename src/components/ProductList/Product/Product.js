import { useState } from "react";

import * as S from "./Product.styled";

const Product = () => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const mouseHoverRenderer = () => {
    if (isMouseEntered) {
      return <S.AddToBasketButton>Sepete Ekle</S.AddToBasketButton>;
    }

    return (
      <>
        <S.Details>
          <S.Detail>
            <S.DetailTitle>Marka:</S.DetailTitle>
            <S.DetailDesc>Apple</S.DetailDesc>
          </S.Detail>
          <S.Detail>
            <S.DetailTitle>Renk:</S.DetailTitle>
            <S.DetailDesc>Kırmızı</S.DetailDesc>
          </S.Detail>
        </S.Details>
        <S.Price>90,85 TL</S.Price>
        <S.PreviousPriceTag>
          <S.OldPrice>124,00 TL</S.OldPrice>
          <S.Discount>12%</S.Discount>
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
        <S.Image src="assets/images/prod1.png" alt="Iphone 11" />
      </S.ImageContainer>
      <S.Body>
        <S.Title>
          Apple Iphone 11 Pro Maxi Phone 11 Kırmızı Kılıf, Max Pro 11, Distribütör
          Garantili Cep Telefonu
        </S.Title>
        {mouseHoverRenderer()}
      </S.Body>
    </S.Card>
  );
};

export default Product;
