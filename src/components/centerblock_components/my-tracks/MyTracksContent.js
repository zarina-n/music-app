import { StyledContent, CenterblockHeading } from '../Centerblock.styled'
import ContentTitle from '../ContentTitle'
import MyTracks from './MyTracks'

const MyTracksContent = () => {
  return (
    <StyledContent>
      <CenterblockHeading>Мой плейлист</CenterblockHeading>

      <ContentTitle />
      <MyTracks />
    </StyledContent>
  )
}

export default MyTracksContent
