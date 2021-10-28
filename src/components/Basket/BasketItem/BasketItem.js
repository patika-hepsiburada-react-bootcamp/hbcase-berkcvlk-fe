import { useBasket } from "hooks";
import * as S from "./BasketItem.styled";

const BasketItem = ({ item }) => {
  const { removeItem } = useBasket();
  const { productId, image, title } = item;

  return (
    <S.BasketItem>
      <S.ImageContainer>
        <S.Image src={image} alt={title} />
      </S.ImageContainer>
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.RemoveButton onClick={() => removeItem(productId)}>Kaldır</S.RemoveButton>
      </S.Details>
    </S.BasketItem>
  );
};

export default BasketItem;
