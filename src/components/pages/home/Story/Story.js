import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Row, Col } from 'brickworks';

import { Markdown, Title, Section, InnerSection, Image } from '../../../ui';
import theme from '../../../../utils/theme';

const ImageRow = styled(Row)`
  @media screen and (max-width: 524px) {
    ${Col} {
      display: none;
    }

    ${Col}:first-child {
      display: block;
      flex: 1;
      padding-left: 1em;
      padding-right: 1em;
    }
  }
`;

const Story = ({ data }) => {
  const {
    heading,
    content: {
      markdown: { html },
    },
    images,
  } = data;

  const renderImages = () =>
    images.map(image => {
      const {
        file: { imageUrl },
        id,
      } = image;

      return (
        <Col key={id}>
          <Image src={imageUrl} />
        </Col>
      );
    });

  return (
    <Fragment>
      <ThemeProvider theme={theme.lighterBlue}>
        <Section>
          <InnerSection>
            <Title>{heading}</Title>
            <Markdown html={html} />
          </InnerSection>
        </Section>
      </ThemeProvider>
      <ImageRow maxWidth={960} centered padded xs={3}>
        {renderImages()}
      </ImageRow>
    </Fragment>
  );
};

Story.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

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
      images {
        id
        file {
          imageUrl: url
        }
      }
    }
  }
`;
