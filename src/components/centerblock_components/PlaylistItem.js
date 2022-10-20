import {
  Title,
  TitleImage,
  TitleText,
  Author,
  Album,
  SongTime,
  PlaylistItemContainer,
} from './Centerblock.styled'

import Like from '../../assets/Like'
import { getTrackData } from '../../features/track/trackSlice'
import { useDispatch } from 'react-redux'

function PlaylistItem({ playlistData }) {
  const dispatch = useDispatch()

  function convertToMinutes(value) {
    return Math.floor(value / 60) + ':' + (value % 60 ? value % 60 : '00')
  }

  const getTrack = (
    name,
    id,
    author,
    album,
    duration_in_seconds,
    track_file
  ) => {
    dispatch(
      getTrackData({
        name,
        id,
        author,
        album,
        duration_in_seconds,
        track_file,
      })
    )
    //console.log(track)
  }

  return (
    <>
      {playlistData.map(
        ({
          name,
          id,
          description,
          author,
          album,
          duration_in_seconds,
          track_file,
        }) => (
          <PlaylistItemContainer
            key={id}
            id={id}
            onClick={() =>
              getTrack(name, id, author, album, duration_in_seconds, track_file)
            }
          >
            <div>
              <Title>
                <TitleImage>
                  <svg>
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </TitleImage>

                <TitleText>
                  {name}
                  <span>{description}</span>
                </TitleText>
              </Title>

              <Author>{author}</Author>

              <Album>{album}</Album>

              <SongTime>
                <Like />

                <span>{convertToMinutes(duration_in_seconds)}</span>
              </SongTime>
            </div>
          </PlaylistItemContainer>
        )
      )}
    </>
  )
}

export default PlaylistItem
