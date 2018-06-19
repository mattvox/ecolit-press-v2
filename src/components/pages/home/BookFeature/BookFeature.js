import React from 'react';
import styled from 'styled-components';

import {
  Markdown,
  Title,
  Subtitle,
  Section as _Section,
  InnerSection,
} from '../../../ui';
import theme from '../../../../utils/theme';

const Section = styled(_Section)`
  color: ${theme.colors.darkGray};
  background: linear-gradient(
    ${theme.colors.blue} 180px,
    ${theme.colors.white} 180px
  );

  h1,
  h2 {
    color: ${theme.colors.white};
  }

  @media screen and (max-width: 768px) {
    background: ${theme.colors.blue};
  }
`;

const BookFeature = ({
  data: {
    bookTitle,
    author,
    content: {
      markdown: { html },
    },
  },
}) => (
  <Section xs={1} md={2} justify="center">
    <InnerSection maxWidth={400} centered={false}>
      <Title>{bookTitle}</Title>
      <Subtitle>By {author}</Subtitle>
      <Markdown html={html} />
    </InnerSection>
    <InnerSection maxWidth={400} centered={false}>
      <Title>{bookTitle}</Title>
      <Subtitle>By {author}</Subtitle>
      <Markdown html={html} />
    </InnerSection>
  </Section>
);

export default BookFeature;

export const BookFeatureQuery = graphql`
  fragment bookFeatureQuery on RootQueryType {
    bookFeature: contentfulBookFeatureSection(
      contentful_id: { eq: "4QquLRWm1aWoIQooWcIuS2" }
    ) {
      bookTitle
      author
      content {
        markdown: childMarkdownRemark {
          html
        }
      }
    }
  }
`;
