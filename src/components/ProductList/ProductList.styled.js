import styled from "styled-components";

import theme from "themes";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 254px);
  grid-gap: 14px;
`;

export const NoItemFound = styled.h2`
  margin-top: 12px;
  color: ${theme.colors.gray200};
  font-weight: 700;
`;
