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
import Note from '../../assets/Note'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../features/track/trackApiSlice'
import {
  getCurrentTrack,
  setFavoriteTrack,
} from '../../features/track/trackSlice'
import { useDispatch, useSelector } from 'react-redux'

function PlaylistItem({ playlistData }) {
  const [addTrack] = useAddFavoriteTrackMutation()
  const [deleteTrack] = useDeleteFavoriteTrackMutation()
  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.track?.currentTrack)

  function convertToMinutes(value) {
    const mins = ~~((value % 3600) / 60)
    const secs = ~~value % 60
    let result = mins + ':' + (secs < 10 ? '0' : '') + secs

    return result
  }

  const getTrack = (
    name,
    id,
    author,
    album,
    duration_in_seconds,
    track_file,
    favorite,
    isPlaying
  ) => {
    const trackData = {
      name,
      id,
      author,
      album,
      duration_in_seconds,
      track_file,
      favorite,
      isPlaying,
    }
    dispatch(getCurrentTrack(trackData))
  }

  const favoriteToggle = (favorite, id) => {
    if (favorite) {
      deleteTrack(id)
    } else if (favorite === undefined) {
      addTrack(id)
    }

    dispatch(setFavoriteTrack(id))
  }

  return (
    <>
      {playlistData?.map(
        ({
          name,
          id,
          description,
          author,
          album,
          duration_in_seconds,
          track_file,
          logo,
          favorite,
        }) => (
          <PlaylistItemContainer
            style={
              id === currentTrack?.id
                ? { border: '1px solid #888', scale: '1.05' }
                : {}
            }
            key={id}
            id={id}
            currentTrack={currentTrack}
            onClick={() =>
              getTrack(
                name,
                id,
                author,
                album,
                duration_in_seconds,
                track_file,
                favorite
              )
            }
          >
            <div>
              <Title>
                <TitleImage>
                  {logo !== null ? (
                    <img src={logo} alt="logo" />
                  ) : (
                    <Note alt="logo" />
                  )}
                </TitleImage>

                <TitleText>
                  {name}
                  <span>{description}</span>
                </TitleText>
              </Title>

              <Author>{author}</Author>

              <Album>{album}</Album>

              <SongTime favorite={favorite} id={id}>
                <Like
                  onClick={(event) => {
                    event.stopPropagation()
                    favoriteToggle(favorite, id)
                  }}
                />

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
