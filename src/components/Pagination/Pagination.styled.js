import styled from "styled-components";

import theme from "themes";

export const Pagination = styled.div`
  display: flex;
  align-items: center;

  margin: 32px 0;
`;

export const PaginateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  border: 1px solid ${theme.colors.gray100};
  border-radius: 8px;

  font-size: 10px;
  color: ${theme.colors.gray700};

  cursor: pointer;
  user-select: none;

  ${(p) =>
    p.isActive &&
    `
    border-color: ${theme.colors.orange};
    color: ${theme.colors.orange};
  `};
`;

export const Pages = styled.div`
  display: flex;
  margin: 0 12px;

  ${PaginateButton} + ${PaginateButton} {
    margin-left: 8px;
  }
`;
