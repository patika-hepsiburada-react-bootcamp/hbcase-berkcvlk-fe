import styled from "styled-components";

import theme from "themes";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;

  display: inline-block;
  position: relative;
`;

export const Bounce = styled.div`
  position: absolute;
  border: 4px solid ${theme.colors.orange};
  opacity: 1;
  border-radius: 50%;

  animation: sk-bounce 1s infinite ease-in-out;

  @keyframes sk-bounce {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export const Bounce2 = styled(Bounce)`
  animation-delay: -0.5s;
`;
