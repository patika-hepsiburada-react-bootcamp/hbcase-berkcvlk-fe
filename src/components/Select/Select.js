import { useOutsideClick, useFilters, useQueries } from "hooks";
import * as S from "./Select.styled";

const Select = () => {
  const { filters } = useFilters();
  const { order, setOrder } = useQueries();
  const { ref, isShown, setIsShown } = useOutsideClick();

  const toggleShownHandler = () => {
    setIsShown((prev) => !prev);
  };

  const itemClickHandler = (value) => {
    setOrder(value);
    toggleShownHandler();
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Anchor onClick={toggleShownHandler}>
        Sıralama
        <S.Arrow />
      </S.Anchor>
      {isShown && (
        <S.Menu>
          {filters[1].items.map((item, index) => (
            <S.SelectItem
              data-testid="selectItem"
              key={index}
              onClick={() => itemClickHandler(item.value)}
              isActive={item.value === order}
            >
              {item.text}
            </S.SelectItem>
          ))}
        </S.Menu>
      )}
    </S.Wrapper>
  );
};

export default Select;
