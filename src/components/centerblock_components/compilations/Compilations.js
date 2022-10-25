import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext } from 'react'
import { ThemeContext } from '../../../App'
import { useParams } from 'react-router-dom'

import { useGetCompilationByIdQuery } from '../../../features/track/trackApiSlice'
const Compilations = () => {
  const { darkTheme } = useContext(ThemeContext)
  const { id } = useParams()

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
    content = data.items
    // console.log(content)
    console.log(content[0].genre)

    return <PlaylistItem playlistData={content} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <StyledContentPlaylist>{content}</StyledContentPlaylist>
}

export default Compilations
