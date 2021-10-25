import styled from "styled-components";
import themes from "themes";

export const SubHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  padding: 16px 0;
`;

export const PageInformations = styled.div`
  max-width: fit-content;
`;

export const PageTitle = styled.h2`
  font-size: ${themes.fontSizes.lg};
  font-weight: 700;
  color: ${themes.colors.text};
  margin: 0;
`;

export const PageSubTitle = styled.h4`
  font-size: ${themes.fontSizes.xs};
  font-weight: 500;
  color: ${themes.colors.gray500};
  margin: 0;
`;

export const SearchedKey = styled.span`
  color: ${themes.colors.black};
  margin-left: 2px;
`;
