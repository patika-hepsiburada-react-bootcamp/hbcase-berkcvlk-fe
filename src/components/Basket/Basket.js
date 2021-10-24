import { useState } from "react";

import * as S from "./Basket.styled";

const Basket = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.Anchor onClick={toggleOpenHandler}>Sepetim</S.Anchor>
      {isOpen && <S.Menu />}
    </S.Wrapper>
  );
};

export default Basket;
