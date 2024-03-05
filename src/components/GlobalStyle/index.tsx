import { createGlobalStyle } from "styled-components"
import OpenSansLight from './Fonts/OpenSans-Light.ttf'
import OpenSansRegular from './Fonts/OpenSans-Regular.ttf'
import OpenSansBold from './Fonts/OpenSans-Bold.ttf'
import MonumentUltraBold from './Fonts/MonumentExtended-Ultrabold.otf'

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: 'MonumentUltraBold';
src: local('Monument Ultra Bold'), local('MonumentUltraBold'), url(${MonumentUltraBold});
}
@font-face {
font-family: 'OpenSansLight';
src: local('Open Sans Light'), local('OpenSansLight'), url(${OpenSansLight});
}
  @font-face {
  font-family: 'OpenSansRegular';
  src: local('Open Sans Regular'), local('OpenSansRegular'), url(${OpenSansRegular});
}
  @font-face {
  font-family: 'OpenSansBold';
  src: local('Open Sans Bold'), local('OpenSansBold'), url(${OpenSansBold});
}

//variations



/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}

:root{
  --whiteGray: #d0d9de;
  --blackGray: #181818

}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: OpenSansRegular;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1 {
	font-family: MonumentUltraBold;

}

`
export default GlobalStyle;