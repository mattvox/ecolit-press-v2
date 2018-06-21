import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Markdown, Title, Section, InnerSection } from '../../../ui';
import theme from '../../../../utils/theme';

const Contact = ({
  data: {
    heading,
    content: {
      markdown: { html },
    },
  },
}) => (
  <ThemeProvider theme={theme.white}>
    <Section>
      <InnerSection style={{ paddingTop: '100px' }}>
        <Title>{heading}</Title>
        <Markdown html={html} />
      </InnerSection>
    </Section>
  </ThemeProvider>
);

export default Contact;

export const ContactQuery = graphql`
  fragment contactQuery on RootQueryType {
    contact: contentfulContactSection(
      contentful_id: { eq: "2H54vLQEHCUIuAwg6ikqkg" }
    ) {
      heading
      content {
        markdown: childMarkdownRemark {
          html
        }
      }
    }
  }
`;
