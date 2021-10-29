import * as S from "./Loading.styled";

const Loading = () => {
  return (
    <S.Wrapper data-testid="loading">
      <S.Spinner>
        <S.Bounce />
        <S.Bounce2 />
      </S.Spinner>
    </S.Wrapper>
  );
};

export default Loading;
