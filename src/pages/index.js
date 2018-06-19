import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import { Landing, Mission, Story, BookFeature } from '../components/pages/home'

// use react-scroll to create scroll button drop down
// icons are font awesome, maybe include css file or react package?

const IndexPage = ({ data }) => (
  <Fragment>
    <Landing />
    <Mission data={data.mission} />
    <Story data={data.story} />
    <BookFeature data={data.bookFeature} />
  </Fragment>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    ...storyQuery
    ...missionQuery
    ...bookFeatureQuery
  }
`
