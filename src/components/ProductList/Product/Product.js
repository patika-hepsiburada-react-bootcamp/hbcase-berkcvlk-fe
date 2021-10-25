import * as S from "./Product.styled.js";

const Product = () => {
  return (
    <S.Card>
      <S.ImageContainer>
        <S.Image
          src={`assets/images/prod${Math.floor(Math.random() * 4) + 1}.png`}
          alt="Iphone 11"
        />
      </S.ImageContainer>
      <S.Body>
        <S.Title>
          Apple Iphone 11 Pro Maxi Phone 11 Kırmızı Kılıf, Max Pro 11, Distribütör
          Garantili Cep Telefonu
        </S.Title>
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
      </S.Body>
    </S.Card>
  );
};

export default Product;
