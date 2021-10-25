import { Search, Basket } from "components";
import SubHeader from "./Subheader/SubHeader";
import * as S from "./Header.styled";

const Header = () => {
  return (
    <>
      <S.Container>
        <S.Header>
          <S.Logo src="assets/images/logo.png" alt="Hepsiburada" />
          <Search />
          <Basket />
        </S.Header>
      </S.Container>
      <SubHeader />
    </>
  );
};

export default Header;
