export const getTrackDataPlaylist = (
  favoriteTracks,
  tracks,
  searchValue,
  shuffleState
) => {
  const currentTracks = tracks?.filter((track) =>
    favoriteTracks?.some((favoriteTrack) => track.id === favoriteTrack.id)
  )

  let trackData

  if (searchValue) {
    trackData = favoriteTracks?.filter(
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
