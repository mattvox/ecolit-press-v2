import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import {
  Markdown,
  Title,
  Subtitle,
  Section,
  InnerSection,
} from '../components/ui';
import theme from '../utils/theme';

const BlogPost = ({ data }) => {
  const {
    title,
    short,
    author,
    content: {
      markdown: { html },
    },
    date,
  } = data.post;

  return (
    <ThemeProvider theme={theme.white}>
      <Section>
        <InnerSection style={{ paddingTop: '100px' }}>
          <Title>{title}</Title>
          <Subtitle>{short}</Subtitle>
          <Subtitle>By {author}</Subtitle>
          <Subtitle>Published {date}</Subtitle>
          <Markdown html={html} />
        </InnerSection>
      </Section>
    </ThemeProvider>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object,
  }).isRequired,
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
      date: createdAt(formatString: "dddd, MMMM Do, YYYY")
    }
  }
`;

export default BlogPost;
