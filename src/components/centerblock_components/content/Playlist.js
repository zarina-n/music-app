// import { useState, useEffect } from "react";
import { StyledContentPlaylist } from '../Centerblock.styled'
import SkeletonPlaylistItem from '../../../skeletons/SkeletonPlaylistItem'
import PlaylistItem from '../PlaylistItem'
import { useContext } from 'react'
import { ThemeContext } from '../../../App'

import { useGetAllTracksQuery } from '../../../features/track/trackApiSlice'

function Playlist() {
  const { darkTheme } = useContext(ThemeContext)

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
    content = data.results
    // console.log(content)

    return <PlaylistItem playlistData={content} />
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <StyledContentPlaylist>{content}</StyledContentPlaylist>
}

export default Playlist
