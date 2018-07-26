import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { Markdown, Title, Section, InnerSection } from '../../../../ui';
import theme from '../../../../../utils/theme';

const Landing = ({ data }) => {
  const {
    bookTitle,
    content: {
      markdown: { html },
    },
  } = data;

  return (
    <ThemeProvider theme={theme.lighterBlue}>
      <Section>
        <InnerSection style={{ paddingTop: '100px' }}>
          <Title>{bookTitle}</Title>
          <Markdown html={html} />
        </InnerSection>
      </Section>
    </ThemeProvider>
  );
};

Landing.propTypes = {
  data: PropTypes.shape({
    bookTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
};

export default Landing;

export const EmmaLandingQuery = graphql`
  fragment emmaLandingQuery on RootQueryType {
    landing: contentfulBookLandingSection(
      contentful_id: { eq: "2dm2IKDFUwSaGmE8qUWYGg" }
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
          imageUrl: url
        }
      }
    }
  }
`;
