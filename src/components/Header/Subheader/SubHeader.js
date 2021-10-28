import { useQueries } from "hooks";
import { Select } from "components";
import * as S from "./SubHeader.styled";

const SubHeader = () => {
  const { search, brand, setSearch } = useQueries();

  return (
    <S.SubHeader>
      <S.PageInformations>
        <S.PageTitle>{`${
          brand && brand.map((b) => b[0].toUpperCase() + b.substring(1)).join(", ")
        } Cep Telefonu`}</S.PageTitle>
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
