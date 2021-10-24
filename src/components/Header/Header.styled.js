import styled from "styled-components";
import theme from "themes";

export const Container = styled.div`
  height: 96px;
  padding: 24px 0;
  box-shadow: ${theme.shadows.header};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export const Logo = styled.img`
  display: block;
`;
