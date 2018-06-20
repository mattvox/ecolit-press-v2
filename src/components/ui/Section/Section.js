import styled from 'styled-components';
import { Row } from 'brickworks';

const Section = styled(Row)`
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};

  h1 {
    color: ${props => props.theme.h1};
  }
`;

Section.defaultProps = {
  padded: '1em',
};

export default Section;
