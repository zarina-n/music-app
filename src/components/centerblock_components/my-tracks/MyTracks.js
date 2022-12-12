import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../App'
import { useGetFavoriteTracksQuery } from '../../../features/track/trackApiSlice'
import { getFavoriteTracks } from '../../../features/track/trackSlice'
import { useDispatch, useSelector } from 'react-redux'

const MyTracks = () => {
  const { darkTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.track?.tracks)
  const favoriteTracks = tracks?.filter((track) => track.favorite)

  useEffect(() => {
    dispatch(getFavoriteTracks(favoriteTracks))
  }, [favoriteTracks, dispatch, tracks])

  const searchValue = useSelector((state) => state.track.search)

  let trackData

  if (searchValue) {
    trackData = favoriteTracks?.filter(
      (track) =>
        track.author.toLowerCase().includes(searchValue?.toLowerCase()) ||
        track.name.toLowerCase().includes(searchValue?.toLowerCase())
    )
  } else {
    trackData = tracks?.filter((track) =>
      favoriteTracks?.some((favoriteTrack) => track.id === favoriteTrack.id)
    )
  }

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFavoriteTracksQuery()

  let content

  useEffect(() => {
    if (isSuccess) {
      dispatch(getFavoriteTracks(content))
    }
  }, [content, isSuccess, dispatch])

  if (isLoading) {
    content = Array.from({ length: 10 }).map((item, i) => (
      <SkeletonPlaylistItem key={i} theme={darkTheme ? 'dark' : 'light'} />
    ))
  } else if (isSuccess) {
    content = data.map((track) => {
      return {
        ...track,
        favorite: true,
      }
    })

    return <PlaylistItem playlistData={trackData} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <StyledContentPlaylist>{content}</StyledContentPlaylist>
}

export default MyTracks
