import styled from 'styled-components';
import { Col } from 'brickworks';

const InnerSection = styled(Col)`
  color: ${({ theme }) => theme.fg};
  background-color: ${({ theme }) => theme.bg};

  h1 {
    color: ${({ theme }) => theme.h1};
  }
`;

InnerSection.defaultProps = {
  centered: true,
  maxWidth: 800,
};

export default InnerSection;
