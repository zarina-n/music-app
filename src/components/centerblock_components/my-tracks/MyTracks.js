import { StyledContentPlaylist } from '../Centerblock.styled'
import PlaylistItem from '../PlaylistItem'
import { getFavoriteTracks } from '../../../features/track/trackSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const MyTracks = () => {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.track?.tracks)

  const favoriteTracks = tracks?.filter((track) => track.favorite)

  useEffect(() => {
    dispatch(getFavoriteTracks(favoriteTracks))
  }, [favoriteTracks, dispatch, tracks])

  return (
    <StyledContentPlaylist>
      <PlaylistItem playlistData={favoriteTracks} />
    </StyledContentPlaylist>
  )
}

export default MyTracks
