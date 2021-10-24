import { Search, Basket } from "components";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo src="assets/images/logo.png" alt="Hepsiburada" />
        <Search />
        <Basket />
      </S.Header>
    </S.Container>
  );
};

export default Header;
