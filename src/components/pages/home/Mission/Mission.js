import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Markdown, Title, Section, InnerSection } from '../../../ui';
import theme from '../../../../utils/theme';

const Mission = ({ data }) => {
  const {
    heading,
    content: {
      markdown: { html },
    },
  } = data;

  return (
    <ThemeProvider theme={theme.white}>
      <Section>
        <InnerSection>
          <Title>{heading}</Title>
          <Markdown html={html} />
        </InnerSection>
      </Section>
    </ThemeProvider>
  );
};

Mission.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  }).isRequired,
};

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
