import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Markdown, Title, Section, InnerSection } from '../../../ui';
import theme from '../../../../utils/theme';

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
  <ThemeProvider theme={theme.white}>
    <Section>
      <InnerSection>
        <Title>{heading}</Title>
        <Markdown html={html} />
      </InnerSection>
    </Section>
  </ThemeProvider>
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
