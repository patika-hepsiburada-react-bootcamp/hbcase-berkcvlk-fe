import { useState } from "react";

import BasketItem from "./BasketItem/BasketItem";
import * as S from "./Basket.styled";

const Basket = () => {
  const [hasItems, setHasItems] = useState(true);
  const [isShown, setIsShown] = useState(false);

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
        <S.Menu>
          <BasketItem />
          <BasketItem />
        </S.Menu>
      )}
      {hasItems && <S.NotifyBubble>4</S.NotifyBubble>}
    </S.Wrapper>
  );
};

export default Basket;
