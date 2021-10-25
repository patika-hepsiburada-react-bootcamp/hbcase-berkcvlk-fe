import styled, { css } from "styled-components";

import theme from "themes";

export const Wrapper = styled.div`
  position: relative;
`;

export const Anchor = styled.div`
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

export const Arrow = styled.div`
  width: 21px;
  height: 21px;

  background: url("assets/images/arrow.png") no-repeat;
`;

export const Menu = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  right: 0;

  width: 200px;
  padding: 16px 24px;

  background-color: #ffffff;
  border: 1px solid ${theme.colors.gray500};
  border-radius: 4px;

  z-index: 1;
`;

export const SelectItem = styled.div`
  position: relative;

  font-size: ${theme.fontSizes.rg};
  font-weight: 500;
  color: ${theme.colors.gray500};

  cursor: pointer;

  & + & {
    margin-top: 12px;
  }

  ${(p) =>
    p.isActive &&
    css`
      color: ${theme.colors.orange} !important;

      &::before {
        content: "✓";
        position: absolute;
        top: 0;
        left: -16px;

        width: 16px;
        height: 16px;
      }
    `}
`;
