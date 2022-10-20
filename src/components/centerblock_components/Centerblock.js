import { StyledCenterBlock, CenterblockHeading } from './Centerblock.styled'
import Search from './Search'
import Filter from './Filter'
import Content from './Content'

function Centerblock() {
  return (
    <StyledCenterBlock>
      <Search />
      <CenterblockHeading>Треки</CenterblockHeading>
      <Filter />
      <Content />
    </StyledCenterBlock>
  )
}

export default Centerblock
