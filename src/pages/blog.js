import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Blog } from '../components/pages/blog';

const BlogPage = ({ data }) => (
  <Fragment>
    <Blog data={data.blogPosts} />
  </Fragment>
);

BlogPage.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object,
  }).isRequired,
};

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    ...blogPostsQuery
  }
`;
