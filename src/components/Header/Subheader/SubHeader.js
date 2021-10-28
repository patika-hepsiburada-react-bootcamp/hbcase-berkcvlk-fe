import { useQueries } from "hooks";
import { Select } from "components";
import * as S from "./SubHeader.styled";

const SubHeader = () => {
  const { search, setSearch } = useQueries();

  return (
    <S.SubHeader>
      <S.PageInformations>
        <S.PageTitle>Cep telefonu arama</S.PageTitle>
        {search && (
          <S.PageSubTitle>
            Aranan kelime:
            <S.SearchedKey>{search}</S.SearchedKey>
            <S.DeleteSearch onClick={() => setSearch("")}>Sil</S.DeleteSearch>
          </S.PageSubTitle>
        )}
      </S.PageInformations>
      <Select />
    </S.SubHeader>
  );
};

export default SubHeader;
