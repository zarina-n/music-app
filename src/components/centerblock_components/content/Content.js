import { StyledContent } from '../Centerblock.styled'
import ContentTitle from '../ContentTitle'
import Playlist from './Playlist'
import { CenterblockHeading } from '../Centerblock.styled'
import Filter from '../Filter'

function Content() {
  return (
    <StyledContent>
      <CenterblockHeading>Треки</CenterblockHeading>
      <Filter />
      <ContentTitle />
      <Playlist />
    </StyledContent>
  )
}

export default Content
