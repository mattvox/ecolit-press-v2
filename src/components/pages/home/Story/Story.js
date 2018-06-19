import React from 'react';
import { Row, Col } from 'brickworks';

import { Markdown, Title } from '../../../ui';

// should import markdown styles here
// should import page themes

const Story = ({
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

export default Story;

export const StoryQuery = graphql`
  fragment storyQuery on RootQueryType {
    story: contentfulStorySection(
      contentful_id: { eq: "5dYiZly4YosGi4mYAGkGyo" }
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
