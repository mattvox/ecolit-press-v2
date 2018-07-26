import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Link from 'gatsby-link';

import { Section, InnerSection } from '../../../ui';
import theme from '../../../../utils/theme';

const Title = styled.h1`
  font-family: 'Bitter', serif;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-family: 'Bitter', serif;
  font-size: 1.2rem;
  font-weight: normal;
  padding-top: 1em;
  padding-bottom: 1em;
  ${'' /* color: ${theme.colors.mediumGray}; */} ${'' /* font-weight: bold; */};
`;

const Tagline = styled.h3`
  font-size: 1rem;
  color: ${theme.colors.mediumBlue};
  text-transform: uppercase;
  font-weight: 300;
  ${'' /* text-align: center; */};
`;

const Content = styled.div`
  .add-padding {
    padding: 20px;
  }
  h1,
  h2,
  h3 {
    padding: 20px 0 0 20px;
  }
  h1 {
    font-size: 1rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: gray;
  }
  p {
    font-size: 1.3rem;
    font-weight: normal;
    padding: 0.25rem 0;
  }
  ul {
    margin: 0;
    padding: 0 0 20px 0;
  }
  li {
    font-size: 1.3rem;
    list-style-type: circle;
    margin-left: 32px;
    padding: 0 0 20px 0;
  }
  blockquote {
    border: none;
    padding: 20px;
    quotes: '“' '”' '‘' '’';
    p {
      font-size: 1.4rem;
      font-family: 'Bitter', serif;
      font-style: italic;
      line-height: 2.4em;
      color: gray;
      &::before {
        content: open-quote;
        font-family: serif;
        font-style: italic;
        font-size: 2.6em;
        line-height: 0.1em;
        margin-right: 6px;
        vertical-align: -0.25em;
      }
      &::after {
        content: close-quote;
        font-family: serif;
        font-style: italic;
        font-size: 2.6em;
        line-height: 0.1em;
        margin-left: 6px;
        vertical-align: -0.55em;
      }
    }
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const Blog = ({ data }) => {
  console.log(data.edges);

  const renderList = () =>
    data.edges.map(({ node }) => (
      <Section key={node.slug}>
        <InnerSection style={{ textAlign: 'left', width: '100%' }}>
          <Tagline>
            Published on {node.date} by {node.author}
          </Tagline>
          <Title>{node.title}</Title>
          <Subtitle>{node.short}</Subtitle>

          <Content>{node.content.markdown.excerpt}</Content>
          <Content style={{ textAlign: 'right', paddingTop: '30px' }}>
            <Link to={`/blog/${node.slug}`}>Read more</Link>
          </Content>
        </InnerSection>
      </Section>
    ));

  return (
    <ThemeProvider theme={theme.lighterBlue}>
      <div style={{ padding: '100px 0 32px 0', textAlign: 'left' }}>
        {renderList()}
      </div>
    </ThemeProvider>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.array.isRequired,
  }).isRequired,
};

export default Blog;

export const BlogPostsQuery = graphql`
  fragment blogPostsQuery on RootQueryType {
    blogPosts: allContentfulBlogPost(
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          title
          short
          slug
          author
          content {
            markdown: childMarkdownRemark {
              excerpt(pruneLength: 300)
            }
          }
          date: createdAt(formatString: "dddd, MMMM Do, YYYY")
        }
      }
    }
  }
`;
