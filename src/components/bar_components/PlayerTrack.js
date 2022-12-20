import {
  ContainContainer,
  ContainImage,
  ContainAuthor,
  ContainName,
  NameAlbumContainer,
} from './Bar.styled'

import Note from '../../assets/Note'

function PlayerTrack({ author, name }) {
  return (
    <ContainContainer>
      <ContainImage>
        <Note alt="music" />
      </ContainImage>
      <NameAlbumContainer>
        <div>
          {author ? <ContainAuthor>{author}</ContainAuthor> : ''}
          {name ? <ContainName>{name}</ContainName> : ''}
        </div>
      </NameAlbumContainer>
    </ContainContainer>
  )
}

export default PlayerTrack
