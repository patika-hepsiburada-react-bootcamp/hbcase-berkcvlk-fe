import { useQueries } from "hooks";
import * as S from "./Filter.styled";

const Filter = ({ filter, activeStates }) => {
  const { setOrder, toggleVariant } = useQueries();
  const { title, type, items, multipleChoice } = filter;

  const clickHandler = (value) => {
    if (multipleChoice) {
      return toggleVariant(type, value);
    }

    setOrder(value);
  };

  return (
    <S.Filter>
      <S.Title>{title}</S.Title>
      {items.map((item, index) => (
        <S.FilterItem
          key={index}
          onClick={() => clickHandler(item.value)}
          isActive={activeStates && activeStates.includes(item.value)}
        >
          {item.text}
          {item.count > 0 && <S.FilterCount>({item.count})</S.FilterCount>}
        </S.FilterItem>
      ))}
    </S.Filter>
  );
};

export default Filter;
