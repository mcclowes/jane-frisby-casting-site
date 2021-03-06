import { css, injectGlobal } from "styled-components";

import * as mixins from "codogo-utility-functions";

import * as vars from "./vars";

const textMargins = mixins.objectMap(vars.font.size, (key, val) => val + " 0");

const defaultGlobalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Abel|Nunito:400,600,700");

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    min-height: 100%;
    position: relative;
  }

  body {
    background: white;
    font-family: Nunito, Helvetica, Arial, sans-serif;
    ${mixins.bpEach("font-size", vars.font.size)} color: ${vars.colors.text};
    margin: 0;
    line-height: 1.5;
    ${mixins.bpEither("margin-bottom", vars.dim.footer.height)};
  }

  a,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
    color: currentColor;
  }

  p,
  h1,
  h2,
  h3,
  h4 {
    ${mixins.bpEach("margin", textMargins)};
  }

  img {
    vertical-align: bottom;
  }

  strong {
    font-weight: bold;
  }

  p > a {
    text-decoration: underline;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const additionalGlobalStyles = css``;

export default () => injectGlobal`
	${defaultGlobalStyles}
	${additionalGlobalStyles}
`;
