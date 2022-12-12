import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../App'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  getPlaylistTracks,
  getFilteredTracks,
} from '../../../features/track/trackSlice'

import { useGetCompilationByIdQuery } from '../../../features/track/trackApiSlice'
const Compilations = () => {
  const { darkTheme } = useContext(ThemeContext)
  const { id } = useParams()
  const dispatch = useDispatch()
  const playlistTracks = useSelector((state) => state.track?.playlistTracks)
  const searchValue = useSelector((state) => state.track.search)
  const allTracks = useSelector((state) => state.track?.tracks)

  let trackData

  if (searchValue) {
    trackData = playlistTracks?.filter(
      (track) =>
        track.author.toLowerCase().includes(searchValue?.toLowerCase()) ||
        track.name.toLowerCase().includes(searchValue?.toLowerCase())
    )
  } else {
    trackData = allTracks?.filter((track) =>
      playlistTracks?.some((playlistTrack) => track.id === playlistTrack.id)
    )
  }

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCompilationByIdQuery(id)

  let content

  useEffect(() => {
    if (isSuccess) {
      dispatch(getPlaylistTracks(content))
    }
  }, [content, isSuccess, dispatch])

  useEffect(() => {
    if (playlistTracks) {
      dispatch(getFilteredTracks(trackData))
    }
  }, [playlistTracks, dispatch, trackData])

  if (isLoading) {
    content = Array.from({ length: 10 }).map((item, i) => (
      <SkeletonPlaylistItem key={i} theme={darkTheme ? 'dark' : 'light'} />
    ))
  } else if (isSuccess) {
    content = data.items

    return <PlaylistItem playlistData={trackData} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <StyledContentPlaylist>{content}</StyledContentPlaylist>
}

export default Compilations
