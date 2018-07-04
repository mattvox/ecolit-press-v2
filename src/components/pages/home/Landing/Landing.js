import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Row } from 'brickworks';

import { InnerSection, Image } from '../../../ui';
import theme from '../../../../utils/theme';
import downArrowSVG from '../../../../static/icons/angle-down.svg';

const Arrow = styled.div`
  bottom: 60px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 999;
  color: white;
  font-size: 4.5em;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
`;

const Tagline = styled.h2`
  padding-top: 1em;
  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;
  font-weight: normal;
`;

const Background = styled(Row)`
  background: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
`;

const ContentWrapper = styled(InnerSection)`
  @media screen and (min-width: 460px) {
    max-width: 400px;
  }
`;

const Landing = ({ data: { image, logo } }) => (
  <Fragment>
    <Background minHeight="100vh" justify="center" imageUrl={image.url}>
      <ThemeProvider theme={theme.landing}>
        <ContentWrapper textAlign="center" alignSelf="center" maxWidth={220}>
          <Image src={logo.url} />
          <Tagline>
            Fostering empathy and sustainability one story at a time
          </Tagline>
        </ContentWrapper>
      </ThemeProvider>
    </Background>
    <Arrow>
      <img src={downArrowSVG} alt="arrow down" />
    </Arrow>
  </Fragment>
);

Landing.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.object.isRequired,
    logo: PropTypes.object.isRequired,
  }).isRequired,
};

export default Landing;

export const LandingQuery = graphql`
  fragment landingQuery on RootQueryType {
    landingBackground: contentfulAsset(id: { eq: "c2mAv0fqWxCmgugym0Cu84a" }) {
      image: file {
        url
      }
    }

    logoWhite: contentfulAsset(id: { eq: "c72mgHuTGuIeAgCogIc2Qak" }) {
      logo: file {
        url
      }
    }
  }
`;
