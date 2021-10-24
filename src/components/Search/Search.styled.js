import styled from "styled-components";
import theme from "themes";

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  max-width: 695px;
  height: 48px;

  padding: 8px 20px;
  border-radius: 100px;

  background-color: ${theme.colors.gray100};
`;

export const Input = styled.input`
  flex-grow: 1;

  border: none;
  outline: none;
  background-color: transparent;

  font-family: ${theme.fonts.default};
  font-size: ${theme.fontSizes.rg};

  &::placeholder {
    color: ${theme.colors.gray500};
  }
`;

export const SearchIcon = styled.i`
  width: 32px;
  height: 32px;

  background: url("assets/images/search.png") no-repeat;
  border: none;

  margin-right: 4px;
`;
