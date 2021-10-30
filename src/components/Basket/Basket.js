import { useState } from "react";

import { useBasket } from "hooks";
import BasketItem from "./BasketItem/BasketItem";
import * as S from "./Basket.styled";

const Basket = () => {
  const [isShown, setIsShown] = useState(false);
  const { basketItems } = useBasket();

  const showMenuHandler = () => {
    setIsShown(true);
  };

  const hideMenuHandler = () => {
    setIsShown(false);
  };

  return (
    <S.Wrapper onMouseEnter={showMenuHandler} onMouseLeave={hideMenuHandler}>
      <S.Anchor>Sepetim</S.Anchor>
      {isShown && (
        <S.Menu data-testid="menu">
          {basketItems.length
            ? basketItems.map((item) => (
                <BasketItem
                  key={item.productId}
                  item={item}
                  hideMenu={hideMenuHandler}
                />
              ))
            : "Sepetinizde ürün bulunmamaktadır!"}
        </S.Menu>
      )}
      {basketItems.length ? (
        <S.NotifyBubble>{basketItems.length}</S.NotifyBubble>
      ) : null}
    </S.Wrapper>
  );
};

export default Basket;
