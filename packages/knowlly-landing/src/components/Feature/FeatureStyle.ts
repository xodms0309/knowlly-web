import styled, { css } from 'styled-components';
import theme from '@styles/theme';

export const FeatureContainer = styled.section`
  height: 95.6rem;
  background-color: ${theme.color.gray['F7']};
`;

export const MenuContainer = styled.ul<{ selectedMenu: number }>`
  display: flex;
  justify-content: center;
  padding-top: 8rem;
  color: ${theme.color.gray['8F']};

  ${({ selectedMenu }) => {
    return css`
      & > :nth-child(${selectedMenu}) {
        color: ${theme.color.gray['00']};
        border-bottom: 5px solid ${theme.color.primary['dark']};
      }
    `;
  }};

  & > :nth-child(2) {
    margin: 0 6rem;
  }
`;

export const Menu = styled.li`
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  color: inherit;
`;

const handleImageMargin = (selectedMenu: number) => {
  switch (selectedMenu) {
    case 1:
      return css`
        margin-left: 32.5rem;
      `;
    case 2:
      return css`
        margin-left: 19.5rem;
      `;
    case 3:
      return css`
        margin-left: 22.4rem;
      `;
  }
};

export const ContentImage = styled.img<{ selectedMenu: number }>`
  position: absolute;
  ${({ selectedMenu }) => {
    return css`
      ${handleImageMargin(selectedMenu)}
    `;
  }}
`;

export const ContentsWrapper = styled.div`
  position: relative;
  margin-left: 96rem;
  padding-top: 21.6rem;
`;

export const Title = styled.p`
  margin-bottom: 3.4rem;
  font-family: 'GmarketSansBold';
  font-size: 6.2rem;
  white-space: pre-line;
`;

export const SubTitle = styled.p`
  font-family: 'GmarketSansMedium';
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 130%;
  color: ${theme.color.gray['44']};
  white-space: pre-line;
`;
