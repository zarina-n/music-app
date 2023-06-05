export const getTrackDataPlaylist = (
  filter,
  allTracks,
  searchValue,
  shuffleState
) => {
  let trackData

  if (filter && filter.filterBy === 'genre') {
    trackData = allTracks.filter((track) => track.genre === filter.option)
  } else if (filter && filter.filterBy === 'author') {
    trackData = allTracks.filter((track) => track.author === filter.option)
  } else if (filter && filter.filterBy === 'year') {
    filter.option === 'Более новые' || filter.option === 'More recent'
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
  } else if (shuffleState) {
    trackData = [...allTracks]?.sort(() => Math.random() - 0.5)
  } else if (searchValue) {
    trackData = allTracks?.filter(
      (track) =>
        track.author.toLowerCase().includes(searchValue?.toLowerCase()) ||
        track.name.toLowerCase().includes(searchValue?.toLowerCase())
    )
  } else {
    trackData = allTracks
  }

  return trackData
}
