import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'brickworks';

import {
  Markdown,
  Title,
  Subtitle,
  Section as _Section,
  InnerSection,
  Image,
} from '../../../ui';

import theme from '../../../../utils/theme';

const Section = styled(_Section)`
  color: ${theme.colors.darkGray};
  background: linear-gradient(
    ${theme.colors.blue} 160px,
    ${theme.colors.white} 160px
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
    image: {
      file: { url: imageUrl },
    },
  },
}) => (
  <Section>
    <Row xs={1} md={2} maxWidth={800} centered>
      <InnerSection>
        <Title>{bookTitle}</Title>
        <Subtitle>By {author}</Subtitle>
        <Markdown html={html} />
      </InnerSection>
      <InnerSection>
        <Image src={imageUrl} />
      </InnerSection>
    </Row>
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
      image: bookImage {
        file {
          url
        }
      }
    }
  }
`;
