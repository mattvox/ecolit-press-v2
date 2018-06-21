import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Grid, Col } from 'brickworks';

import './fonts.css';
import './index.css';

import { Header, Footer } from '../components/layout';

const Layout = ({ children, data }) => (
  <Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Grid minHeight="100vh" flow="column" colFlex={1}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Col>{children()}</Col>
      <Footer />
    </Grid>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
