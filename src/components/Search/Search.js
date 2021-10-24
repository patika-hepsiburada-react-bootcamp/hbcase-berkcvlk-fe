import * as S from "./Search.styled";

const Search = () => {
  return (
    <S.Wrapper>
      <S.SearchIcon />
      <S.Input placeholder="25 milyon'dan fazla ürün içerisinde ara" />
    </S.Wrapper>
  );
};

export default Search;
