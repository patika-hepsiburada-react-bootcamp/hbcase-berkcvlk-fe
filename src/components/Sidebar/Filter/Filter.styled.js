import styled from "styled-components";
import theme from "themes";

export const Filter = styled.div`
  & + & {
    margin-top: 24px;
  }
`;

export const Title = styled.h4`
  font-size: ${theme.fontSizes.md};
  font-weight: 500;

  color: ${theme.colors.text};
  margin: 0 0 20px 0;
`;

export const FilterItem = styled.p`
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;

  color: ${theme.colors.gray700};
  margin: 0;

  cursor: pointer;

  & + & {
    margin-top: 6px;
  }

  &:hover {
    color: ${theme.colors.orange};
  }

  ${(p) => p.isActive && `color: ${theme.colors.orange};`}
`;
