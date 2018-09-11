import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';

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
    id,
    title,
    short,
    slug,
    author,
    content: {
      markdown: { html },
    },
    date,
  } = data.post;

  const disqusShortname = 'ecolitpress-com';
  const disqusConfig = {
    url: `https://ecolitpress.com/blog/${slug}`,
    identifier: id,
    title,
  };

  return (
    <ThemeProvider theme={theme.white}>
      <Section>
        <InnerSection style={{ paddingTop: '100px' }}>
          <Title>{title}</Title>
          {/* <Subtitle>{short}</Subtitle> */}
          <Subtitle>By {author}</Subtitle>
          {/* <Subtitle>Published {date}</Subtitle> */}
          <Markdown html={html} />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
      id
      title
      short
      slug
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
