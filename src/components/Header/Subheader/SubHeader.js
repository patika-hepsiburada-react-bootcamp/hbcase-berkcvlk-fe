import * as S from "./SubHeader.styled";

const SubHeader = () => {
  return (
    <S.SubHeader>
      <S.PageInformations>
        <S.PageTitle>Iphone iOS cep telefonu</S.PageTitle>
        <S.PageSubTitle>
          Aranan kelime:
          <S.SearchedKey>iphone 11</S.SearchedKey>
        </S.PageSubTitle>
      </S.PageInformations>
    </S.SubHeader>
  );
};

export default SubHeader;
