import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'brickworks';

import theme from '../../../../utils/theme';

import {
  Markdown,
  Title,
  Subtitle,
  Section,
  InnerSection,
  Image,
} from '../../../ui';

const BookFeature = ({ data }) => {
  const {
    bookTitle,
    author,
    content: {
      markdown: { html },
    },
    image: {
      file: { imageUrl },
    },
  } = data;

  return (
    <Section theme={theme.bookFeature}>
      <Row xs={1} md={2} maxWidth={800} centered>
        <InnerSection>
          <Title>{bookTitle}</Title>
          <Subtitle>By {author}</Subtitle>
          <Markdown html={html} />
        </InnerSection>
        <InnerSection>
          <Image src={imageUrl} />
        </InnerSection>
      </Row>
    </Section>
  );
};

BookFeature.propTypes = {
  data: PropTypes.shape({
    bookTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
};

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
      image: bookImage {
        file {
          imageUrl: url
        }
      }
    }
  }
`;
