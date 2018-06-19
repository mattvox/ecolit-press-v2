import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
  .add-padding {
    padding: 20px;
  }
  h1,
  h2,
  h3 {
    padding: 20px 0 0 20px;
  }
  h1 {
    font-size: 1rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: gray;
  }
  p {
    font-size: 1.3rem;
    font-weight: normal;
    padding: 0.25rem 0;
  }
  ul {
    margin: 0;
    padding: 0 0 20px 0;
  }
  li {
    font-size: 1.3rem;
    list-style-type: circle;
    margin-left: 32px;
    padding: 0 0 20px 0;
  }
  blockquote {
    border: none;
    padding: 20px;
    quotes: '“' '”' '‘' '’';
    p {
      font-size: 1.4rem;
      font-family: 'Bitter', serif;
      font-style: italic;
      line-height: 2.4em;
      color: gray;
      &::before {
        content: open-quote;
        font-family: serif;
        font-style: italic;
        font-size: 2.6em;
        line-height: 0.1em;
        margin-right: 6px;
        vertical-align: -0.25em;
      }
      &::after {
        content: close-quote;
        font-family: serif;
        font-style: italic;
        font-size: 2.6em;
        line-height: 0.1em;
        margin-left: 6px;
        vertical-align: -0.55em;
      }
    }
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const Markdown = ({ html }) => (
  <StyledMarkdown dangerouslySetInnerHTML={{ __html: html }} />
);

Markdown.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Markdown;
