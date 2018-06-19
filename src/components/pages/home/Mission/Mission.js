import React from 'react'
import { Row, Col } from 'brickworks'

// should import markdown styles here
// should import page themes

const Mission = ({
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

export default Mission

export const MissionQuery = graphql`
  fragment missionQuery on RootQueryType {
    mission: contentfulMissionSection(
      contentful_id: { eq: "5qFGY2jrAAAAqKKs8ScSKg" }
    ) {
      heading
      content {
        markdown: content
      }
    }
  }
`
