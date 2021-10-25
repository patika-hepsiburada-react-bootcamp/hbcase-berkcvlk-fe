import * as S from "./BasketItem.styled";

const BasketItem = () => {
  return (
    <S.BasketItem>
      <S.ImageContainer>
        <S.Image src="assets/images/prod1.png" alt="Apple - Iphone 11" />
      </S.ImageContainer>
      <S.Details>
        <S.Title>Iphone 11 Kırmızı Kılıflı Garantili Cep Telefonu</S.Title>
        <S.RemoveButton>Kaldır</S.RemoveButton>
      </S.Details>
    </S.BasketItem>
  );
};

export default BasketItem;
