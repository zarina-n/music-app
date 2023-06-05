import {
  StyledContent,
  CenterblockHeading,
  ContainerForHeadingAndFilters,
} from '../Centerblock.styled'
import ContentTitle from '../ContentTitle'
import Playlist from './Playlist'
import Filter from '../filter/Filter'

import { useTranslation } from 'react-i18next'

function Content() {
  const { t } = useTranslation(['home'])

  return (
    <StyledContent>
      <ContainerForHeadingAndFilters>
        <CenterblockHeading>{t('songs')}</CenterblockHeading>
        <Filter />
      </ContainerForHeadingAndFilters>
      <ContentTitle />
      <Playlist />
    </StyledContent>
  )
}

export default Content
