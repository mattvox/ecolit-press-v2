import styled, { css } from 'styled-components';

function applyCssWithUnit(value, unit = 'px') {
  switch (typeof value) {
    case 'number':
      return `${value}${unit}`;
    case 'string':
      return value;
    default:
      return false;
  }
}

// prettier-ignore
export default styled.div`
  box-sizing: border-box;
  ${({
    textAlign,
    left,
    right,
    centered,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
  }) => css`
    ${textAlign && css`text-align: ${textAlign};`}
    ${minWidth && css`min-width: ${applyCssWithUnit(minWidth)};`}
    ${maxWidth && css`max-width: ${applyCssWithUnit(maxWidth)};`}
    ${minHeight && css`min-height: ${applyCssWithUnit(minHeight)};`}
    ${maxHeight && css`max-height: ${applyCssWithUnit(maxHeight)};`}
    ${left && css`margin-right: auto;`}
    ${right && css`margin-left: auto;`}
    ${centered && css`margin-left: auto;margin-right: auto;`}
  `};
`;
