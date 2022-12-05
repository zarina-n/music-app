import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../App'
import { useGetFavoriteTracksQuery } from '../../../features/track/trackApiSlice'
import { getFavoriteTracks } from '../../../features/track/trackSlice'
import { useDispatch } from 'react-redux'

const MyTracks = () => {
  const { darkTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()

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

    return <PlaylistItem playlistData={content} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <StyledContentPlaylist>{content}</StyledContentPlaylist>
}

export default MyTracks
