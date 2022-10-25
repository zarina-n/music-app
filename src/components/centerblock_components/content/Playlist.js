// import { useState, useEffect } from "react";
import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext } from 'react'
import { ThemeContext } from '../../../App'

import { useGetAllTracksQuery } from '../../../features/track/trackApiSlice'
import { getTrackData } from '../../../features/track/trackSlice'
import { useDispatch } from 'react-redux'

function Playlist() {
  const { darkTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllTracksQuery()

  let content

  if (isLoading) {
    content = Array.from({ length: 10 }).map((item, i) => (
      <SkeletonPlaylistItem key={i} theme={darkTheme ? 'dark' : 'light'} />
    ))
  } else if (isSuccess) {
    content = data
    dispatch(getTrackData(content))
    // console.log(content)

    return <PlaylistItem playlistData={content} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <StyledContentPlaylist>{content}</StyledContentPlaylist>
}

export default Playlist
