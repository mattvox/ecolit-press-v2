import styled from 'styled-components';
import { Row } from 'brickworks';

import theme from '../../../../utils/theme';

export default styled(Row)`
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
