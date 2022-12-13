export const getTrackDataPlaylist = (
  allTracks,
  playlistTracks,
  searchValue,
  shuffleState
) => {
  const currentTracks = allTracks?.filter((track) =>
    playlistTracks?.some((playlistTrack) => track.id === playlistTrack.id)
  )

  let trackData

  if (searchValue) {
    trackData = playlistTracks?.filter(
      (track) =>
        track.author.toLowerCase().includes(searchValue?.toLowerCase()) ||
        track.name.toLowerCase().includes(searchValue?.toLowerCase())
    )
  } else if (shuffleState) {
    trackData = [...currentTracks].sort(() => Math.random() - 0.5)
  } else {
    trackData = currentTracks
  }

  return trackData
}
