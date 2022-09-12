import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Stratos LC Web', sans-serif;
  color:  ${({ theme }) => theme.colors.text};
  background-color:  ${({ theme }) => theme.colors.backGrColor};
  

}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'Stratos LC Web', sans-serif;
  cursor: pointer;
  font-style: normal;
    font-weight: 400;
    line-height: 24px;
}

button{
    cursor: pointer;
    font-family: 'Stratos LC Web', sans-serif;
}

ul li {
  list-style: none;
}

@font-face {
    font-family: 'Stratos LC Web';
    src: url('../fonts/StratosLCWeb-Light.eot');
    src: local('../fonts/Stratos LC Web Light'), local('StratosLCWeb-Light'),
        url('../fonts/StratosLCWeb-Light.eot?#iefix') format('embedded-opentype'),
        url('../fonts/StratosLCWeb-Light.woff2') format('woff2'),
        url('../fonts/StratosLCWeb-Light.woff') format('woff'),
        url('../fonts/StratosLCWeb-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
} 

 /* @font-face {
    font-family: 'Stratos LC Web';
    src: url('StratosLCWeb-Bold.eot');
    src: local('Stratos LC Web Bold'), local('StratosLCWeb-Bold'),
        url('StratosLCWeb-Bold.eot?#iefix') format('embedded-opentype'),
        url('StratosLCWeb-Bold.woff2') format('woff2'),
        url('StratosLCWeb-Bold.woff') format('woff'),
        url('StratosLCWeb-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Stratos LC Web';
    src: url('StratosLCWeb-Medium.eot');
    src: local('Stratos LC Web Medium'), local('StratosLCWeb-Medium'),
        url('StratosLCWeb-Medium.eot?#iefix') format('embedded-opentype'),
        url('StratosLCWeb-Medium.woff2') format('woff2'),
        url('StratosLCWeb-Medium.woff') format('woff'),
        url('StratosLCWeb-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
} 

 @font-face {
    font-family: 'Stratos LC Web';
    src: url('./fonts/StratosLCWeb-Regular.eot');
    src: local('./fonts/Stratos LC Web'), local('./fonts/StratosLCWeb-Regular'),
        url('./fonts/StratosLCWeb-Regular.eot?#iefix') format('embedded-opentype'),
        url('./fonts/StratosLCWeb-Regular.woff2') format('woff2'),
        url('./fonts/StratosLCWeb-Regular.woff') format('woff'),
        url('./fonts/StratosLCWeb-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
} */
`;

export default GlobalStyles;
