import {
  StyledContent,
  CenterblockHeading,
  ContainerForHeadingAndFilters,
} from '../Centerblock.styled'
import ContentTitle from '../ContentTitle'
import Playlist from './Playlist'
import Filter from '../filter/Filter'

function Content() {
  return (
    <StyledContent>
      <ContainerForHeadingAndFilters>
        <CenterblockHeading>Треки</CenterblockHeading>
        <Filter />
      </ContainerForHeadingAndFilters>
      <ContentTitle />
      <Playlist />
    </StyledContent>
  )
}

export default Content
