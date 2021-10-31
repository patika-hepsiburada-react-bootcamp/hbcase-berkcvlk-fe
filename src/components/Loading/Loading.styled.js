import styled from "styled-components";

import theme from "themes";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 4px solid ${theme.colors.orange};
    border-right: 3px solid transparent;
    animation: spinner 0.6s linear infinite;

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
