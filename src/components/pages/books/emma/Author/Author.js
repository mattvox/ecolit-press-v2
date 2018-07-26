import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Row } from 'brickworks';

import {
  Markdown,
  Title,
  Subtitle,
  Section,
  InnerSection,
  Image,
} from '../../../../ui';

import theme from '../../../../../utils/theme';

const Author = ({ data }) => {
  const {
    heading,
    author,
    content: {
      markdown: { html },
    },
    authorImage: {
      file: { imageUrl },
    },
  } = data;

  return (
    <ThemeProvider theme={theme.lighterBlue}>
      <Section>
        <Row xs={1} md={2} maxWidth={800} centered>
          <InnerSection style={{ paddingRight: '1em' }}>
            <Title>{heading}</Title>
            <Subtitle>{author}</Subtitle>
            <Markdown html={html} />
          </InnerSection>
          <InnerSection>
            <Image src={imageUrl} />
          </InnerSection>
        </Row>
      </Section>
    </ThemeProvider>
  );
};

Author.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  }).isRequired,
};

export default Author;

export const EmmaAuthorQuery = graphql`
  fragment emmaAuthorQuery on RootQueryType {
    author: contentfulAuthorSection(
      contentful_id: { eq: "cml0nhxaxiuUMckA0USqS" }
    ) {
      heading
      author
      content {
        markdown: childMarkdownRemark {
          html
        }
      }
      authorImage: authorPhoto {
        file {
          imageUrl: url
        }
      }
    }
  }
`;
