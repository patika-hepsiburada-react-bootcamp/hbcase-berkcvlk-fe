import { createPortal } from "react-dom";

import { useBasket, useModal } from "hooks";
import * as S from "./Modal.styled";

const Modal = () => {
  const { isOpen, hideModal, productId } = useModal();
  const { removeItem } = useBasket();

  if (!isOpen) {
    return null;
  }

  const handleSuccessClick = () => {
    removeItem(productId);
    hideModal();
  };

  const modalRenderer = () => {
    return (
      <S.Wrapper>
        <S.Backdrop data-testid="backdrop" onClick={hideModal} />
        <S.Modal>
          <S.Header>
            <S.Title>Ürünü silmek istediğinize emin misiniz?</S.Title>
          </S.Header>
          <S.Body>
            <S.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentiall....
            </S.Text>
            <S.Buttons>
              <S.Button variant="success" onClick={handleSuccessClick}>
                Evet
              </S.Button>
              <S.Button variant="error" onClick={hideModal}>
                Hayır
              </S.Button>
            </S.Buttons>
          </S.Body>
        </S.Modal>
      </S.Wrapper>
    );
  };

  return <>{createPortal(modalRenderer(), document.getElementById("modal"))}</>;
};

export default Modal;
