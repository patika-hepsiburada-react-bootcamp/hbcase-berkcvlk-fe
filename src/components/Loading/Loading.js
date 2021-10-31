import * as S from "./Loading.styled";

const Loading = () => {
  return (
    <S.Wrapper data-testid="loading">
      <S.Spinner />
    </S.Wrapper>
  );
};

export default Loading;
