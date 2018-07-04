import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Landing, Mission, Story, BookFeature } from '../components/pages/home';

const IndexPage = ({ data }) => (
  <Fragment>
    <Landing data={{ ...data.landingBackground, ...data.logoWhite }} />
    <Mission data={data.mission} />
    <Story data={data.story} />
    <BookFeature data={data.bookFeature} />
  </Fragment>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    ...landingQuery
    ...storyQuery
    ...missionQuery
    ...bookFeatureQuery
  }
`;
