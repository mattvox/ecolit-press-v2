import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Row } from 'brickworks';

import {
  LinkAsButton,
  Markdown,
  Title,
  Section,
  InnerSection,
  Image,
} from '../../../../ui';
import theme from '../../../../../utils/theme';

const Purchase = ({ data }) => {
  const {
    heading,
    content: {
      markdown: { html },
    },
    bookImage: {
      file: { imageUrl },
    },
  } = data;

  return (
    <ThemeProvider theme={theme.white}>
      <Fragment>
        <Section>
          <Row xs={1} md={2} maxWidth={800} centered>
            <InnerSection>
              <Image src={imageUrl} />
            </InnerSection>
            <InnerSection style={{ paddingLeft: '1em' }}>
              <Title>{heading}</Title>
              <Markdown html={html} />
            </InnerSection>
          </Row>
        </Section>
        <Section>
          <InnerSection flex={1}>
            <div
              style={{
                textAlign: 'center',
                marginTop: '40px',
                marginBottom: '40px',
                minWidth: '200px',
              }}
            >
              <LinkAsButton
                href="https://www.amazon.com/Emma-Alexandra-Lindsay-Fields/dp/0999207504/"
                target="_blank"
              >
                Amazon
              </LinkAsButton>
            </div>
          </InnerSection>
          <InnerSection flex={1}>
            <div
              style={{
                textAlign: 'center',
                marginTop: '40px',
                marginBottom: '40px',
                minWidth: '200px',
              }}
            >
              <LinkAsButton
                href="https://store.casanctuary.org/collections/books/products/book-emma"
                target="_blank"
              >
                Catskill Animal Sanctuary
              </LinkAsButton>
            </div>
          </InnerSection>
          <InnerSection flex={1}>
            <div
              style={{
                textAlign: 'center',
                marginTop: '40px',
                marginBottom: '40px',
                minWidth: '200px',
              }}
            >
              <LinkAsButton
                href="https://www.barnesandnoble.com/w/emma-alexandra-fields/1126858286"
                target="_blank"
              >
                Barnes & Noble
              </LinkAsButton>
            </div>
          </InnerSection>
        </Section>
      </Fragment>
    </ThemeProvider>
  );
};

Purchase.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  }).isRequired,
};

export default Purchase;

export const EmmaPurchaseQuery = graphql`
  fragment emmaPurchaseQuery on RootQueryType {
    purchase: contentfulBookDetailed(
      contentful_id: { eq: "1uU6Xb2hi8ekiikSIc0CAG" }
    ) {
      heading
      content {
        markdown: childMarkdownRemark {
          html
        }
      }
      bookImage {
        file {
          imageUrl: url
        }
      }
    }
  }
`;
