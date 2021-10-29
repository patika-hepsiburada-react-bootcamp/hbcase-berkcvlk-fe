import styled from "styled-components";

import theme from "themes";

export const Card = styled.div`
  height: 475px;
  border: 1px solid #ffffff;

  ${(p) =>
    p.isMouseEntered &&
    `
    border: 1px solid ${theme.colors.gray200};
    border-radius: 6px;
  `}
`;

export const ImageContainer = styled.div`
  text-align: center;

  margin: -1px -1px 0;
  padding: 4px 0;
  height: 340px;

  border-radius: 6px;
  border: 1px solid ${theme.colors.gray200};

  ${(p) => p.isMouseEntered && `border-color: transparent;`}
`;

export const Image = styled.img`
  width: 224px;
  height: 332px;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 10px 10px 0;
`;

export const Title = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  overflow: hidden;

  margin: 0 0 10px;
  width: 100%;
  height: 34px;

  font-size: ${theme.fontSizes.xs};
  font-weight: 400;
  color: ${theme.colors.text};

  line-height: 18px;
`;

export const Details = styled.div`
  margin-bottom: 12px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;

  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.text};

  line-height: 18px;
`;

export const DetailTitle = styled.span`
  font-weight: 500;
`;

export const DetailDesc = styled.span`
  margin-left: 3px;
`;

export const Price = styled.p`
  margin: 0;
  font-size: ${theme.fontSizes.sm};
  font-weight: 700;
  color: ${theme.colors.black};
`;

export const PreviousPriceTag = styled.div`
  display: flex;
  align-items: center;

  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.gray600};
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
`;

export const Discount = styled.span`
  font-weight: 500;
  color: ${theme.colors.red200};
  margin-left: 4px;
`;

export const AddToBasketButton = styled.button`
  width: 100%;
  height: 32px;

  font-size: ${theme.fontSizes.sm};
  font-weight: 500;

  background-color: ${theme.colors.lightOrange};
  color: ${theme.colors.orange};

  border-radius: 8px;
  margin-top: 32px;

  &:disabled {
    color: ${theme.colors.gray500};
    background-color: ${theme.colors.gray300};
    pointer-events: none;
  }

  &:active {
    filter: brightness(0.98);
  }
`;
