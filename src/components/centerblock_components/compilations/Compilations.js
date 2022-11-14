import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext } from 'react'
import { ThemeContext } from '../../../App'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useGetCompilationByIdQuery } from '../../../features/track/trackApiSlice'
const Compilations = () => {
  const { darkTheme } = useContext(ThemeContext)
  const { id } = useParams()
  const userEmail = useSelector((state) => state.auth.user.email)

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCompilationByIdQuery(id)

  let content

  if (isLoading) {
    content = Array.from({ length: 10 }).map((item, i) => (
      <SkeletonPlaylistItem key={i} theme={darkTheme ? 'dark' : 'light'} />
    ))
  } else if (isSuccess) {
    content = data.items.map((track) => {
      if (track.stared_user) {
        for (let i = 0; i < track.stared_user.length; i++) {
          if (track.stared_user[i]?.email === userEmail) {
            return {
              ...track,
              favorite: true,
            }
          }
        }
      } else {
        return {
          ...track,
          favorite: false,
        }
      }
      return track
    })

    return <PlaylistItem playlistData={content} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <StyledContentPlaylist>{content}</StyledContentPlaylist>
}

export default Compilations
