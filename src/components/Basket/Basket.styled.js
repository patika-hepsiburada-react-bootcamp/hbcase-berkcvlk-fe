import styled from "styled-components";
import theme from "themes";

export const Wrapper = styled.div`
  position: relative;
`;

export const Anchor = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 48px;

  color: ${theme.colors.gray500};
  border: 1px solid ${theme.colors.gray500};
  border-radius: 4px;

  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  top: calc(100% - 3px);
  right: 0;

  width: 360px;
  padding: 20px;

  border: 1px solid ${theme.colors.gray500};
  border-radius: 4px 0 4px 4px;

  background-color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    right: 0px;
    top: -1px;

    width: 118px;
    height: 1px;

    background-color: #ffffff;
  }
`;
