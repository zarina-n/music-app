import {
  ContainContainer,
  ContainImage,
  ContainAuthor,
  ContainAlbum,
} from './Bar.styled'

import Note from '../../assets/Note'

function PlayerTrack({ author, album }) {
  return (
    <ContainContainer>
      <ContainImage>
        <Note alt="music" />
      </ContainImage>
      <ContainAuthor>
        <a href="http://">{author}</a>
      </ContainAuthor>
      <ContainAlbum>
        <a href="http://">{album}</a>
      </ContainAlbum>
    </ContainContainer>
  )
}

export default PlayerTrack
