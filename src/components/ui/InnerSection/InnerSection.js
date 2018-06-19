import styled from 'styled-components';
import { Col } from 'brickworks';

const InnerSection = styled(Col)`
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};

  h1 {
    color: ${props => props.theme.h1};
  }
`;

InnerSection.defaultProps = {
  centered: true,
  maxWidth: 800,
};

export default InnerSection;
