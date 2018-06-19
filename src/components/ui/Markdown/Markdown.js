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
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: gray;
  }
  p {
    font-size: 1.5rem;
    font-weight: normal;
    padding: 20px 0;
  }
  ul {
    margin: 0;
    padding: 0 0 20px 0;
  }
  li {
    font-size: 1.5rem;
    list-style-type: circle;
    margin-left: 32px;
    padding: 0 0 20px 0;
  }
  blockquote {
    border: none;
    padding: 20px;
    quotes: '“' '”' '‘' '’';
    p {
      font-size: 1.25rem;
      font-family: 'Bitter', serif;
      font-style: italic;
      line-height: 1.8rem;
      color: gray;
      &::before {
        content: open-quote;
        font-family: serif;
        font-style: italic;
        font-size: 2.6rem;
        line-height: 0.1rem;
        margin-right: 6px;
        vertical-align: -0.25rem;
      }
      &::after {
        content: close-quote;
        font-family: serif;
        font-style: italic;
        font-size: 2.6rem;
        line-height: 0.1rem;
        margin-left: 6px;
        vertical-align: -0.55rem;
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
