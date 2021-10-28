import styled from "styled-components";
import themes from "themes";

export const Sidebar = styled.aside`
  max-width: 222px;
  width: 222px;
  padding-top: 20px;
`;

export const RemoveAllFilters = styled.button`
  font-size: ${themes.fontSizes.xs};
  font-weight: 500;

  margin-top: 24px;
  padding: 4px 8px;

  border-radius: 4px;
  border: 1px solid ${themes.colors.red200};

  color: ${themes.colors.red100};
  background-color: #ffffff;
`;
