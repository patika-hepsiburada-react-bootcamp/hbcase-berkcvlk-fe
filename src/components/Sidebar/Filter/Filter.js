import * as S from "./Filter.styled";

const Filter = () => {
  return (
    <S.Filter>
      <S.Title>Renk</S.Title>
      <S.FilterItem isActive>Mavi(3)</S.FilterItem>
      <S.FilterItem>Siyah(3)</S.FilterItem>
      <S.FilterItem>Sarı(3)</S.FilterItem>
      <S.FilterItem>Beyaz(3)</S.FilterItem>
    </S.Filter>
  );
};

export default Filter;
