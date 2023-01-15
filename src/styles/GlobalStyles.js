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
  color:  ${({ theme }) => theme.colors.text};
  background-color:  ${({ theme }) => theme.colors.backGrColor};
  overflow: hidden;
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
    line-height: 1.5rem;
}

button{
    cursor: pointer;
    font-family: 'Stratos LC Web', sans-serif;
}

ul li {
  list-style: none;
}
`

export default GlobalStyles
