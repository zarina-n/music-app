import { StyledCenterBlock, CenterblockHeading } from './Centerblock.styled'
import Search from './Search'
import Filter from './Filter'
import Content from './content/Content'
import MyTracksContent from './my-tracks/MyTracksContent'
import CompilationContent from './compilations/CompilationContent'
import { Routes, Route } from 'react-router-dom'

function Centerblock() {
  return (
    <StyledCenterBlock>
      <Search />
      <CenterblockHeading>Треки</CenterblockHeading>

      <Routes>
        <Route path="/" element={<Filter />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/my-tracks" element={<MyTracksContent />} />
        <Route path="/compilations/:id" element={<CompilationContent />} />
      </Routes>
    </StyledCenterBlock>
  )
}

export default Centerblock
