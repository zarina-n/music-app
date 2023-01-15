import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}


body {
  width: 100%;
  height: 100%;
  font-family: 'Stratos LC Web', sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;


  color:  ${({ theme }) => theme.colors.text};
  background-color:  ${({ theme }) => theme.colors.backGrColor};
  overflow: hidden;

  @media (max-height: 960px) {
  }

  @media (max-width: 994px) {
    font-size: 12px;
  }

  @media (max-width: 880px) {
  }
 
}


*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: inherit;
  cursor: pointer;
  font-style: normal;
    font-weight: 400;
    line-height: 24px;
}

button{
    cursor: pointer;
    font-family: inherit;
}

ul li {
  list-style: none;
}
`

export default GlobalStyles
