import { StyledContentTitle, ContentColumn } from './Centerblock.styled'
import Watch from '../../assets/Watch'

function ContentTitle() {
  return (
    <StyledContentTitle>
      <ContentColumn>Трек</ContentColumn>
      <ContentColumn>Исполнитель</ContentColumn>
      <ContentColumn>Альбом</ContentColumn>
      <ContentColumn>
        <Watch />
      </ContentColumn>
    </StyledContentTitle>
  )
}

export default ContentTitle
