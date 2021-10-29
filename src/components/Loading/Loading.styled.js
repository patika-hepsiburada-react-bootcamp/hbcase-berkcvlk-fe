import styled from "styled-components";

import theme from "themes";

export const Wrapper = styled.div`
  width: 65%;
  margin: 100px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;

  position: relative;
  margin: 100px auto;
`;

export const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${theme.colors.orange};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  animation: sk-bounce 2s infinite ease-in-out;

  @keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }
`;

export const Bounce2 = styled(Bounce)`
  animation-delay: -1s;
`;
