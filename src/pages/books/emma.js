import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// import { Landing, Purchase, Author } from '../components/pages/books/emma';

// landing, purchase, author

const EmmaPage = ({ data }) => (
  <Fragment>
    <div style={{ padding: '200px' }}>This is the Emma Page :)</div>
    {/* <Landing data={data.landing} /> */}
    {/* <Purchase data={data.purchase} /> */}
    {/* <Author data={data.author} /> */}
  </Fragment>
);

EmmaPage.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object,
  }).isRequired,
};

export default EmmaPage;

// export const query = graphql`
//   query IndexPageQuery {
//     ...storyQuery
//     ...missionQuery
//     ...bookFeatureQuery
//   }
// `;
