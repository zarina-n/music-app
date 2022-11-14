import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext } from 'react'
import { ThemeContext } from '../../../App'
import { useGetFavoriteTracksQuery } from '../../../features/track/trackApiSlice'

const MyTracks = () => {
  const { darkTheme } = useContext(ThemeContext)

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFavoriteTracksQuery()

  let content

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
