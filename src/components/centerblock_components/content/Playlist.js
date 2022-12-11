import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../App'

import { useGetAllTracksQuery } from '../../../features/track/trackApiSlice'
import {
  getTrackData,
  getFilteredTracks,
} from '../../../features/track/trackSlice'
import { useDispatch, useSelector } from 'react-redux'

function Playlist() {
  const { darkTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const userEmail = useSelector((state) => state.auth.user.email)
  const allTracks = useSelector((state) => state.track?.tracks)
  const filter = useSelector((state) => state.track.filter)
  const searchValue = useSelector((state) => state.track.search)
  const shuffleState = useSelector((state) => state.track.shuffle)

  let trackData

  if (filter && filter.filterBy === 'genre') {
    trackData = allTracks.filter((track) => track.genre === filter.option)
  } else if (filter && filter.filterBy === 'author') {
    trackData = allTracks.filter((track) => track.author === filter.option)
  } else if (filter && filter.filterBy === 'year') {
    filter.option === 'Более новые'
      ? (trackData = allTracks
          .map((item) => {
            return { ...item, release_date: new Date(item.release_date) }
          })
          .sort((a, b) => Number(b.release_date) - Number(a.release_date)))
      : (trackData = allTracks
          .map((item) => {
            return { ...item, release_date: new Date(item.release_date) }
          })
          .sort((a, b) => Number(a.release_date) - Number(b.release_date)))
  } else {
    trackData = allTracks
  }

  if (searchValue) {
    trackData = allTracks?.filter(
      (track) =>
        track.author.toLowerCase().includes(searchValue?.toLowerCase()) ||
        track.name.toLowerCase().includes(searchValue?.toLowerCase())
    )
  }

  useEffect(() => {
    if (allTracks) {
      dispatch(getFilteredTracks(trackData))
    }
  }, [allTracks, dispatch, trackData])

  // if (shuffleState) {
  //   trackData = [...allTracks].sort(() => Math.random() - 0.5)
  // } else {
  //   trackData = allTracks
  // }

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllTracksQuery()

  let content

  useEffect(() => {
    if (isSuccess) {
      dispatch(getTrackData(content))
    }
  }, [content, isSuccess, dispatch])

  if (isLoading) {
    content = Array.from({ length: 10 }).map((item, i) => (
      <SkeletonPlaylistItem key={i} theme={darkTheme ? 'dark' : 'light'} />
    ))
  } else if (isSuccess) {
    content = data.map((track) => {
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

    //console.log(content)

    return <PlaylistItem playlistData={trackData} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <StyledContentPlaylist>{content}</StyledContentPlaylist>
}

export default Playlist
