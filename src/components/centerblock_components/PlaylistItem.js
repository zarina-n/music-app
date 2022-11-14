import {
  Title,
  TitleImage,
  TitleText,
  Author,
  Album,
  SongTime,
  PlaylistItemContainer,
} from './Centerblock.styled'

import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from '../../features/track/trackApiSlice'

import Like from '../../assets/Like'
import Note from '../../assets/Note'

function PlaylistItem({ playlistData }) {
  // const [liked, setLiked] = useState()

  // const [addTrack] = useAddFavoriteMutation()
  // const [deleteTrack] = useDeleteFavoriteMutation()

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
    favorite
  ) => {
    const trackData = {
      name,
      id,
      author,
      album,
      duration_in_seconds,
      track_file,
      favorite,
    }

    if (trackData.favorite === false) {
      trackData.favorite = true
    } else {
      trackData.favorite = false
    }

    console.log(trackData)
  }

  // const likeToggler = useCallback(
  //   (id, event) => {
  //     console.log(event.target)
  //     setLikedId((prevId) => (prevId === id ? null : id))
  //   },
  //   [setLikedId]
  // )

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
          logo,
          favorite,
        }) => (
          <PlaylistItemContainer key={id} id={id}>
            <div>
              <Title>
                <TitleImage
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
