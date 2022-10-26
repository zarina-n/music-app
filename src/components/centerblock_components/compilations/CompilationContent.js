import { StyledContent, CenterblockHeading } from '../Centerblock.styled'
import ContentTitle from '../ContentTitle'
import Compilations from './Compilations'
import { useParams } from 'react-router-dom'

const CompilationContent = () => {
  const { id } = useParams()

  const compilationNames = {
    1: 'Плейлист дня',
    2: '100 танцевальных хитов',
    3: 'Инди-заряд',
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
