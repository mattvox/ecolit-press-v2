import React, { Fragment } from 'react';

import { Landing, Mission, Story, BookFeature } from '../components/pages/home';

const IndexPage = ({ data }) => (
  <Fragment>
    <Landing />
    <Mission data={data.mission} />
    <Story data={data.story} />
    <BookFeature data={data.bookFeature} />
  </Fragment>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    ...storyQuery
    ...missionQuery
    ...bookFeatureQuery
  }
`;
