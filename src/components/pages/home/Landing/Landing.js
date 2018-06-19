import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'brickworks';

import downArrowSVG from '../../../../static/icons/angle-down.svg';

const Arrow = styled.div`
  bottom: 60px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 999;
  color: black;
  font-size: 4.5em;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
`;

const Landing = () => (
  <Fragment>
    <Row minHeight="100vh" justify="center">
      <Col textAlign="center" alignSelf="center">
        <h1>Ecolit Logo</h1>
        <h3>Fostering empathy and sustainability one story at a time</h3>
      </Col>
    </Row>
    <Arrow>
      <img src={downArrowSVG} />
    </Arrow>
  </Fragment>
);

export default Landing;
