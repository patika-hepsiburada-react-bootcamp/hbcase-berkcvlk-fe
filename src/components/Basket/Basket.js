import { useOutsideClick } from "hooks";
import * as S from "./Basket.styled";

const Basket = () => {
  const { ref, isShown, setIsShown } = useOutsideClick();

  const toggleOpenHandler = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Anchor onClick={toggleOpenHandler}>Sepetim</S.Anchor>
      {isShown && <S.Menu />}
    </S.Wrapper>
  );
};

export default Basket;
