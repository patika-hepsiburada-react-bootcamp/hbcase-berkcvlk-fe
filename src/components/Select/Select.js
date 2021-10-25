import { useOutsideClick } from "hooks";
import * as S from "./Select.styled";

const Select = () => {
  const { ref, isShown, setIsShown } = useOutsideClick();

  const toggleShownHandler = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Anchor onClick={toggleShownHandler}>
        Sıralama
        <S.Arrow />
      </S.Anchor>
      {isShown && (
        <S.Menu>
          <S.SelectItem isActive>En Düşük Fiyat</S.SelectItem>
          <S.SelectItem>En Yüksek Fiyat</S.SelectItem>
          <S.SelectItem>En Yeniler (AZ)</S.SelectItem>
          <S.SelectItem>En Yeniler (ZA)</S.SelectItem>
        </S.Menu>
      )}
    </S.Wrapper>
  );
};

export default Select;
