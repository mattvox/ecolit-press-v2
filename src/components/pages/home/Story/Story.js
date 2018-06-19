import React from 'react'
import { Row, Col } from 'brickworks'

// should import markdown styles here
// should import page themes

const Story = ({
  data: {
    heading,
    content: { markdown },
  },
}) => (
  <Row>
    <Col>
      <h2>{heading}</h2>
      <p>{markdown}</p>
    </Col>
  </Row>
)

export default Story

export const StoryQuery = graphql`
  fragment storyQuery on RootQueryType {
    story: contentfulStorySection(
      contentful_id: { eq: "5dYiZly4YosGi4mYAGkGyo" }
    ) {
      heading
      content {
        markdown: content
      }
    }
  }
`
