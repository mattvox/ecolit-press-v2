import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Landing, Purchase, Author } from '../../components/pages/books/emma';

const EmmaPage = ({ data }) => (
  <Fragment>
    {console.log(data)}
    <Landing data={data.landing} />
    <Purchase data={data.purchase} />
    <Author data={data.author} />
  </Fragment>
);

EmmaPage.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object,
  }).isRequired,
};

export default EmmaPage;

export const query = graphql`
  query EmmaPageQuery {
    ...emmaLandingQuery
    ...emmaPurchaseQuery
    ...emmaAuthorQuery
  }
`;
