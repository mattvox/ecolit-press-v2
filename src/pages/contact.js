import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Contact } from '../components/pages/contact';

const ContactPage = ({ data }) => (
  <Fragment>
    <Contact style={{ margin: '100px' }} data={data.contact} />
  </Fragment>
);

ContactPage.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object,
  }).isRequired,
};

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    ...contactQuery
  }
`;
