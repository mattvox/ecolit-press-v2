import styled from 'styled-components';
import { Row } from 'brickworks';

export default styled(Row)`
  padding: 2rem 1rem;
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};

  h1 {
    color: ${props => props.theme.h1};
  }
`;
