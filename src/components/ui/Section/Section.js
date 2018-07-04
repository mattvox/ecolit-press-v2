import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Grid, Row } from 'brickworks';

const PageSection = styled(Row)`
  padding: 1.4em;
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.fg && theme.fg};
      background: ${theme.bg && theme.bg};

      h1 {
        color: ${theme.h1 && theme.h1};
      }

      h2 {
        color: ${theme.h2 && theme.h2};
      }

      ${theme.query && theme.query};
    `};
`;

const SectionWrapper = styled(Grid)`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const Section = ({ theme, children }) => (
  <SectionWrapper centered maxWidth={960}>
    <PageSection padded theme={theme}>
      {children}
    </PageSection>
  </SectionWrapper>
);

export default Section;
