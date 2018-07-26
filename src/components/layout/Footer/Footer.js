import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid, Row, Col } from 'brickworks';

import { Content } from '../../ui';
import { Envelope, Instagram } from '../../ui/Icons';
import themes from '../../../utils/theme';

const FooterWrapper = styled(Grid)`
  background: ${({ theme }) => theme.bg && theme.bg};
  color: ${({ theme }) => theme.fg && theme.fg};
`;

const FooterSection = styled(Row)`
  padding-left: 1em;
  padding-right: 1em;

  @media screen and (max-width: 500px) {
    justify-content: center;

    > ${Col}:last-child {
      order: 1;
      flex: 1 0 100%;
    }
  }
`;

const IconLink = styled.a`
  text-decoration: none;

  &:link {
    color: ${themes.colors.lighterBlue};
  }
  &:visited {
    color: ${themes.colors.mediumGray};
  }
  &:hover {
    color: ${themes.colors.mediumGray};
  }
  &:active {
    color: ${themes.colors.lighterBlue};
  }
`;

const Footer = () => (
  <ThemeProvider theme={themes.darkGray}>
    <FooterWrapper minWidth="100%" padded>
      <FooterSection
        maxWidth={984}
        minHeight={100}
        centered
        justify="space-between"
        alignItems="center"
        padded
      >
        <Col style={{ display: 'inline-flex' }} order={1}>
          <Content style={{ padding: '6px 12px 0 12px' }}>
            <IconLink
              href="https://www.instagram.com/ecolitpress/"
              target="_blank"
            >
              <Instagram
                fill={themes.colors.lighterBlue}
                width={32}
                height={32}
              />
            </IconLink>
          </Content>
          <Content style={{ padding: '6px 12px 0 12px' }}>
            <IconLink href="mailto:afields@ecolitpress.com">
              <Envelope
                fill={themes.colors.lighterBlue}
                width={32}
                height={32}
              />
            </IconLink>
          </Content>
        </Col>
        <Col textAlign="center">
          <Content>© 2017 Ecolit Press. All rights reserved.</Content>
        </Col>
      </FooterSection>
    </FooterWrapper>
  </ThemeProvider>
);

export default Footer;
