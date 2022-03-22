require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === 'MarkdownRemark') {
//     console.log(node.internal.type);
//   }
// };

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const createBlogPost = post => {
    const basePath = '/blog';
    const blogPostTemplate = path.resolve('src/templates/blog-post.js');

    createPage({
      path: `${basePath}/${post.slug}`,
      component: blogPostTemplate,
      context: {
        // data passed to context is available in page queries as GQL variables.
        slug: post.slug,
      },
    });
  };

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const blogPosts = result.data.allContentfulBlogPost.edges;

        // return blogPosts.forEach(({ node }) => createBlogPost(node));
        return null;
      })
    );
  });
};
