import { StyledContentTitle, ContentColumn } from './Centerblock.styled'
import Watch from '../../assets/Watch'

import { useTranslation } from 'react-i18next'

function ContentTitle() {
  const { t } = useTranslation(['home'])
  return (
    <StyledContentTitle>
      <ContentColumn>{t('song')}</ContentColumn>
      <ContentColumn>{t('singer')}</ContentColumn>
      <ContentColumn>{t('album')}</ContentColumn>
      <ContentColumn>
        <Watch />
      </ContentColumn>
    </StyledContentTitle>
  )
}

export default ContentTitle
