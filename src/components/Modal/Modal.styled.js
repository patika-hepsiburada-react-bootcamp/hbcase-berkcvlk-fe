import styled from "styled-components";

import theme from "themes";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(108, 108, 108, 0.75);

  z-index: -1;
`;

export const Modal = styled.div`
  width: 400px;

  background-color: #ffffff;
  border-radius: 4px;
`;

export const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.gray400};
`;

export const Title = styled.h4`
  font-size: ${theme.fontSizes.sm};
  font-weight: 700;

  color: ${theme.colors.text};
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: 400;

  color: ${theme.colors.text};
  margin: 0 0 10px;

  line-height: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: ${theme.colors.gray100};
  color: #ffffff;
  border-radius: 4px;

  font-size: ${theme.fontSizes.xs};
  font-weight: 700;

  text-transform: uppercase;

  width: 70px;
  height: 26px;

  & + & {
    margin-left: 10px;
  }

  &:active {
    filter: brightness(0.9);
  }

  ${(p) =>
    p.variant === "success" &&
    `
      background-color: ${theme.colors.green};
  `}

  ${(p) =>
    p.variant === "error" &&
    `
      background-color: ${theme.colors.red100};
  `}
`;
