import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'brickworks';

export const PageSection = styled(Row)`
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};

  h1 {
    color: ${props => props.theme.h1};
  }
`;

const Section = ({ theme, children }) => (
  <Row>
    <PageSection padded theme={theme}>
      {children}
    </PageSection>
  </Row>
);

export default Section;
