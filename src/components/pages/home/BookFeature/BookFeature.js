import React from 'react'
import { Row, Col } from 'brickworks'

// should import markdown styles here
// should import page themes

const BookFeature = ({
  data: {
    bookTitle,
    author,
    content: { markdown },
  },
}) => (
  <Row>
    <Col>
      <h2>{bookTitle}</h2>
      <h3>{author}</h3>
      <p>{markdown}</p>
    </Col>
  </Row>
)

export default BookFeature

export const BookFeatureQuery = graphql`
  fragment bookFeatureQuery on RootQueryType {
    bookFeature: contentfulBookFeatureSection(
      contentful_id: { eq: "4QquLRWm1aWoIQooWcIuS2" }
    ) {
      bookTitle
      author
      content {
        markdown: content
      }
    }
  }
`
