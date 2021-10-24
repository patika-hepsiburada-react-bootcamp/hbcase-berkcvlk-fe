import { useState } from "react";

import { useOutsideClick } from "hooks";
import * as S from "./Basket.styled";

const Basket = () => {
  const [hasItems, setHasItems] = useState(false);
  const { ref, isShown, setIsShown } = useOutsideClick();

  const toggleOpenHandler = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Anchor onClick={toggleOpenHandler}>Sepetim</S.Anchor>
      {isShown && <S.Menu />}
      {hasItems && <S.NotifyBubble>4</S.NotifyBubble>}
    </S.Wrapper>
  );
};

export default Basket;
