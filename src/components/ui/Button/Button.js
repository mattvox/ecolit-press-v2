import Link from 'gatsby-link';
import styled from 'styled-components';

import theme from '../../../utils/theme';

export default styled(Link)`
  display: inline-block;
  border-radius: 6px;
  border: 2px solid ${theme.colors.green};
  font-size: 1em;
  padding: 10px;
  text-decoration: none;
  width: 90%;
  &:link {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }
  &:visited {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    text-decoration: none;
  }
  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.purple};
    border-color: ${theme.colors.purple};
    text-decoration: none;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.purple};
    text-decoration: none;
  }
`;
