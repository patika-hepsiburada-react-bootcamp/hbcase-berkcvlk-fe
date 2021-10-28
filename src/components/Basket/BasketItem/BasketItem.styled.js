import styled from "styled-components";
import theme from "themes";

export const BasketItem = styled.div`
  display: flex;
  max-width: 234px;

  & + & {
    margin-top: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 54px;
  height: 72px;

  padding: 6px;

  border-radius: 4px;
  border: 1px solid ${theme.colors.gray200};
`;

export const Image = styled.img`
  width: 40px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const Title = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  overflow: hidden;

  height: 34px;
  width: 100%;
  font-size: ${theme.fontSizes.xs};
  font-weight: 400;
  line-height: 18px;

  margin: 0;
  color: ${theme.colors.text};
`;

export const RemoveButton = styled.button`
  width: 50px;
  height: 20px;

  font-size: 10px;

  background-color: #ffffff;
  color: ${theme.colors.red200};

  border: 1px solid ${theme.colors.red200};
  border-radius: 4px;
`;
