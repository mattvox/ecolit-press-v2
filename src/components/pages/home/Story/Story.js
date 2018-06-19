import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Markdown, Title, Section, InnerSection } from '../../../ui';
import theme from '../../../../utils/theme';

// should import markdown styles here
// should import page themes

const Story = ({
  data: {
    heading,
    content: {
      markdown: { html },
    },
  },
}) => (
  <ThemeProvider theme={theme.lighterBlue}>
    <Section>
      <InnerSection>
        <Title>{heading}</Title>
        <Markdown html={html} />
      </InnerSection>
    </Section>
  </ThemeProvider>
);

export default Story;

export const StoryQuery = graphql`
  fragment storyQuery on RootQueryType {
    story: contentfulStorySection(
      contentful_id: { eq: "5dYiZly4YosGi4mYAGkGyo" }
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
