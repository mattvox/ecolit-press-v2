import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Grid as _Grid, Row, Col } from 'brickworks';

const Grid = styled(_Grid)`
  background-color: rebeccapurple;
  margin-bottom: 1.45em;
`;

const Logo = ({ title }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {title}
      </Link>
    </h1>
  </div>
);

const NavLink = styled(Link)`
  text-decoration: none;

  &:link {
    color: white;
  }
  &:visited {
    color: white;
  }
  &:hover {
    color: white;
  }
  &:active {
    color: white;
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
    <li style={{ paddingRight: '1.0875rem', margin: 0 }}>
      <NavLink to="/">Home</NavLink>
    </li>
    <li style={{ paddingRight: '1.0875rem', margin: 0 }}>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
);

const Header = ({ siteTitle }) => (
  <Grid style={{ position: 'absolute' }} minWidth="100%">
    <Row maxWidth={960} centered alignItems="center">
      <Col>
        <Logo title={siteTitle} />
      </Col>
      <Col right textAlign="right" alignSelf="center">
        <Nav />
      </Col>
    </Row>
  </Grid>
);

export default Header;
