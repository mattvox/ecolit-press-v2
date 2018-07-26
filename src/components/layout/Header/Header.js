import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Grid as _Grid, Row, Col } from 'brickworks';

import logoImage from '../../../static/images/ecolit_logo_color_web.png';
import { Image } from '../../ui';

const Grid = styled(_Grid)`
  background-color: #fff;
  margin-bottom: 1.45em;
`;

// const Logo = ({ title }) => (
//   <div
//     style={{
//       padding: '1.45rem 1rem',
//     }}
//   >
//     <h1 style={{ margin: 0 }}>
//       <Link
//         to="/"
//         style={{
//           color: 'white',
//           textDecoration: 'none',
//         }}
//       >
//         {title}
//       </Link>
//     </h1>
//   </div>
// );

const Logo = () => (
  <div style={{ padding: '1.45rem 1rem' }}>
    <Link to="/">
      <div>
        <Image src={logoImage} alt="Logo" style={{ width: '80px' }} />
      </div>
    </Link>
  </div>
);

const NavLink = styled(Link)`
  text-decoration: none;

  &:link {
    color: #282828;
  }
  &:visited {
    color: #282828;
  }
  &:hover {
    color: #282828;
  }
  &:active {
    color: #282828;
  }
`;

const Nav = () => (
  <ul
    style={{
      display: 'inline-flex',
      listStyle: 'none',
      margin: 0,
    }}
  >
    <li style={{ paddingRight: '1rem', margin: 0 }}>
      <NavLink to="/">Home</NavLink>
    </li>
    <li style={{ paddingRight: '1rem', margin: 0 }}>
      <NavLink to="/blog">Blog</NavLink>
    </li>
    <li style={{ paddingRight: '1rem', margin: 0 }}>
      <NavLink to="/books/emma">Emma</NavLink>
    </li>
    <li style={{ paddingRight: '1rem', margin: 0 }}>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
);

const Header = ({ siteTitle }) => (
  <Grid style={{ position: 'absolute' }} minWidth="100%">
    <Row maxWidth={984} centered alignItems="center">
      <Col>
        <Logo title={siteTitle} />
      </Col>
      <Col right textAlign="right" alignSelf="center">
        <Nav />
      </Col>
    </Row>
  </Grid>
);

// Logo.propTypes = {
//   title: PropTypes.string.isRequired,
// };

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
