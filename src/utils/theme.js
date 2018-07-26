import { css } from 'styled-components';

const colors = {
  white: '#fff',
  lighterBlue: '#e7eff2',
  lightGray: '#e6ecee',
  lightBlue: '#9bd2db',
  mediumBlue: '#53c3c3',
  mediumGray: '#67737b',
  darkGray: '#232b3a',
  green: '#87b09A',
  orange: '#e16a2d',
  blue: '#c7dae7',
  purple: '#41395f',
};

export default {
  colors: {
    ...colors,
  },
  white: {
    fg: colors.darkGray,
    bg: colors.white,
    h1: colors.purple,
  },
  lighterBlue: {
    fg: colors.darkGray,
    bg: colors.lighterBlue,
    h1: colors.purple,
  },
  darkGray: {
    fg: colors.lighterBlue,
    bg: colors.darkGray,
  },
  landing: {
    fg: colors.lighterBlue,
    bg: 'transparent',
    h1: colors.white,
  },
  bookFeature: {
    h1: colors.white,
    h2: colors.white,
    fg: colors.lighterBlue,
    bg: colors.green,
    query: css`
      @media screen and (min-width: 768px) {
        background: linear-gradient(
          ${colors.green} 180px,
          ${colors.white} 180px
        );

        color: ${colors.darkGray};
      }
    `,
  },
};
/*
const TwoColumnSection = styled(Section)`
  padding-top: 1.25em;
  color: ${theme.colors.darkGray};
  background: linear-gradient(
    ${theme.colors.blue} 160px,
    ${theme.colors.white} 160px
  );

  h1,
  h2 {
    color: ${theme.colors.white};
  }

  @media screen and (max-width: 768px) {
    background: ${theme.colors.blue};
  }
`;
*/
