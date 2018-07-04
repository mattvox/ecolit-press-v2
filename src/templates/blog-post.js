import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Markdown,
  Title,
  Subtitle,
  Section,
  InnerSection,
} from '../components/ui';
import theme from '../utils/theme';

export default ({ data }) => {
  const {
    title,
    short,
    author,
    content: {
      markdown: { html },
    },
  } = data.post;

  return (
    <ThemeProvider theme={theme.white}>
      <Section>
        <InnerSection style={{ paddingTop: '100px' }}>
          <Title>{title}</Title>
          <Subtitle>{short}</Subtitle>
          <Subtitle>By {author}</Subtitle>
          <Markdown html={html} />
        </InnerSection>
      </Section>
    </ThemeProvider>
  );
};

export const BlogPostQuery = graphql`
  query blogPostQuery($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      short
      author
      content {
        markdown: childMarkdownRemark {
          html
        }
      }
      createdAt
    }
  }
`;
