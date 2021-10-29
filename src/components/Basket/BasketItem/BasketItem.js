import { useModal } from "hooks";
import * as S from "./BasketItem.styled";

const BasketItem = ({ item, hideMenu }) => {
  const { showModal } = useModal();
  const { productId, image, title } = item;

  const removeHandler = () => {
    hideMenu();
    showModal(productId);
  };

  return (
    <S.BasketItem>
      <S.ImageContainer>
        <S.Image
          src={`${process.env.REACT_APP_API_ENDPOINT}/${image}`}
          alt={title}
        />
      </S.ImageContainer>
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.RemoveButton onClick={removeHandler}>Kaldır</S.RemoveButton>
      </S.Details>
    </S.BasketItem>
  );
};

export default BasketItem;
