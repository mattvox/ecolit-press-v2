import React from 'react';
import { Row, Col } from 'brickworks';

import { Markdown, Title } from '../../../ui';

// should import markdown styles here
// should import page themes

const Mission = ({
  data: {
    heading,
    content: {
      markdown: { html },
    },
  },
}) => (
  <Row>
    <Col>
      <Title>{heading}</Title>
      <Markdown html={html} />
    </Col>
  </Row>
);

export default Mission;

export const MissionQuery = graphql`
  fragment missionQuery on RootQueryType {
    mission: contentfulMissionSection(
      contentful_id: { eq: "5qFGY2jrAAAAqKKs8ScSKg" }
    ) {
      heading
      content {
        markdown: childMarkdownRemark {
          html
        }
      }
    }
  }
`;
