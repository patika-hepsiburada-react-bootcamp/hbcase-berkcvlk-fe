import * as S from "./Pagination.styled";

const Pagination = () => {
  return (
    <S.Pagination>
      <S.PaginateButton>{"<"}</S.PaginateButton>
      <S.Pages>
        <S.PaginateButton isActive>1</S.PaginateButton>
        <S.PaginateButton>2</S.PaginateButton>
        <S.PaginateButton>3</S.PaginateButton>
      </S.Pages>
      <S.PaginateButton>{">"}</S.PaginateButton>
    </S.Pagination>
  );
};

export default Pagination;
