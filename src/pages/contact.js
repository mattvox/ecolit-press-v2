import React, { Fragment } from 'react';

import { Contact } from '../components/pages/contact';

const ContactPage = ({ data }) => (
  <Fragment>
    <Contact style={{ margin: '100px' }} data={data.contact} />
  </Fragment>
);

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    ...contactQuery
  }
`;
