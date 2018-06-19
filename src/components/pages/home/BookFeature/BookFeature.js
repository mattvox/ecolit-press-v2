import React from 'react';
import { Row, Col } from 'brickworks';

import { Markdown, Title, Subtitle } from '../../../ui';

// should import markdown styles here
// should import page themes

const BookFeature = ({
  data: {
    bookTitle,
    author,
    content: {
      markdown: { html },
    },
  },
}) => (
  <Row>
    <Col>
      <Title>{bookTitle}</Title>
      <Subtitle>{author}</Subtitle>
      <Markdown html={html} />
    </Col>
  </Row>
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
