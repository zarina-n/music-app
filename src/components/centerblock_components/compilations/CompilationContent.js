import { StyledContent, CenterblockHeading } from '../Centerblock.styled'
import ContentTitle from '../ContentTitle'
import Compilations from './Compilations'
import { useParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

const CompilationContent = () => {
  const { id } = useParams()
  const { t } = useTranslation(['home'])

  const compilationNames = {
    1: t('classic'),
    2: t('dance'),
    3: t('rock'),
  }

  let compilationName = compilationNames[id]

  return (
    <StyledContent>
      <CenterblockHeading>{compilationName}</CenterblockHeading>
      <ContentTitle />
      <Compilations />
    </StyledContent>
  )
}

export default CompilationContent
