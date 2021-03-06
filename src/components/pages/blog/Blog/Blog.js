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
`;

const Tagline = styled.h3`
  font-size: 1rem;
  color: ${theme.colors.mediumBlue};
  text-transform: uppercase;
  font-weight: 300;
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
    margin-top: 1.45em;
    width: 100%;
    height: auto;
  }
`;

const Blog = ({ data }) => {
  const renderList = () =>
    data.edges.map(({ node }) => (
      <Section key={node.slug}>
        <InnerSection style={{ textAlign: 'left', width: '100%' }}>
          <Tagline>
            Published on {node.publishedDate} by {node.author}
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
      <React.Fragment>
        <div style={{ padding: '100px 0 32px 0', textAlign: 'left' }}>
          <Section theme={theme.white}>
            <InnerSection
              theme={theme.white}
              style={{ textAlign: 'left', width: '100%' }}
            >
              <Subtitle style={{ lineHeight: '1.8em' }}>
                Welcome to the Ecolit Press blog! Wondering why some people go
                vegan? Hoping to find ways to eat healthier? Maybe you want to
                learn more about how you can support social progress? This blog
                is here to help all of us think through how we can better
                support our own health, the health of non-human and human
                animals, and the overall health of our planet.
              </Subtitle>
            </InnerSection>
          </Section>
          {renderList()}
        </div>
      </React.Fragment>
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
          publishedDate(formatString: "dddd, MMMM Do, YYYY")
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
