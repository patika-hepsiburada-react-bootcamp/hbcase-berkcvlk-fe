import { Search } from "components";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo src="assets/images/logo.png" alt="Hepsiburada" />
        <Search />
      </S.Header>
    </S.Container>
  );
};

export default Header;
