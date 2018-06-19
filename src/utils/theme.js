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
  bookFeature: {
    fg: colors.darkGray,
    bg: css`linear-gradient(${colors.blue} 206px, ${colors.white} 206px)`,
  },
};
