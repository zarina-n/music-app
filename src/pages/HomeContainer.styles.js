import styled from 'styled-components'

const HomeContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.containerColor};

  display: grid;
  min-height: 100vh;
  grid-auto-columns: 10% 65% 25%;
  grid-template-rows: 1fr auto;
`

export default HomeContainer
