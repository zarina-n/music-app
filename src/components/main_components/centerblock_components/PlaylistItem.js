import {
  Title,
  TitleImage,
  TitleText,
  Author,
  Album,
  SongTime,
  PlaylistItemContainer,
} from './Centerblock.styled'

function PlaylistItem({ playlistData }) {
  console.log(playlistData)
  return (
    <>
      {playlistData.map(
        ({ name, id, description, author, album, duration_in_seconds }) => (
          <PlaylistItemContainer key={id}>
            <div>
              <Title>
                <TitleImage>
                  <svg>
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </TitleImage>

                <TitleText>
                  <a href="http://">
                    {name}
                    <span>{description}</span>
                  </a>
                </TitleText>
              </Title>

              <Author>
                <a href="http://">{author}</a>
              </Author>

              <Album>
                <a href="http://">{album}</a>
              </Album>

              <SongTime>
                <svg alt="time">
                  <use href="img/icon/sprite.svg#icon-like" />
                </svg>
                <span>{duration_in_seconds}</span>
              </SongTime>
            </div>
          </PlaylistItemContainer>
        )
      )}
    </>
  )
}

export default PlaylistItem
