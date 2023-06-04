import { StyledContent, CenterblockHeading } from '../Centerblock.styled'
import ContentTitle from '../ContentTitle'
import MyTracks from './MyTracks'
import { useTranslation } from 'react-i18next'

const MyTracksContent = () => {
  const { t } = useTranslation(['home'])

  return (
    <StyledContent>
      <CenterblockHeading>{t('myPlaylist')}</CenterblockHeading>

      <ContentTitle />
      <MyTracks />
    </StyledContent>
  )
}

export default MyTracksContent
