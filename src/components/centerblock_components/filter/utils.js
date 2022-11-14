export const getFilteredOptions = (tracks, filtered) => {
  const genresArray = [...new Set(tracks?.map((data) => data.genre))]
  const byGenre = []

  for (let i = 0; i < genresArray.length; i++) {
    byGenre[genresArray[i]] = tracks.filter(
      (track) => track.genre === genresArray[i]
    )
  }

  filtered.options = byGenre
  //console.log(filtered.genres[genresArray[1]][1])

  // const years = [
  //   ...new Set(
  //     tracks?.map((data) => Number(data.release_date?.substring(0, 4)))
  //   ),
  // ]

  // const byYear = {}
  // for (let i = 0; i < years.length; i++) {
  //   const tracksArray = []

  //   for (let k = 0; k < tracks.length; k++) {
  //     if (Number(tracks[k].release_date?.substring(0, 4)) === years[i]) {
  //       tracksArray.push(tracks[k])
  //     }
  //   }
  //   byYear[years[i]] = [tracksArray]
  // }
  // console.log(byYear)
  // filtered.push(byYear)

  // --- готовая логика по получению авторв с массивами их песен ---

  const authorsArray = [...new Set(tracks?.map((data) => data.author))]
  const byAuthor = []

  for (let i = 0; i < authorsArray.length; i++) {
    byAuthor[authorsArray[i]] = tracks.filter(
      (track) => track.author === authorsArray[i]
    )
  }

  filtered.options = byAuthor

  // console.log(filtered.authors[authorsArray[0]][0])
  // console.log(filtered.genres)

  return filtered
}

export const getGenres = (tracks, filter) => {
  filter.id = 1
  filter.filterBy = 'жанру'
  filter.options = [...new Set(tracks?.map((data) => data.genre))]
  filter.clicked = false

  const byGenre = []

  for (let i = 0; i < filter.options.length; i++) {
    byGenre[filter.options[i]] = tracks.filter(
      (track) => track.genre === filter.options[i]
    )
  }

  filter.options = byGenre

  return filter
}

export const getAuthors = (tracks, filter) => {
  filter.id = 2
  filter.filterBy = 'исполнителю'
  filter.options = [...new Set(tracks?.map((data) => data.author))]
  filter.clicked = false

  const byAuthor = []

  for (let i = 0; i < filter.options.length; i++) {
    byAuthor[filter.options[i]] = tracks.filter(
      (track) => track.author === filter.options[i]
    )
  }

  filter.options = byAuthor

  return filter
}

export const getYears = (tracks, filter) => {
  filter.id = 3
  filter.filterBy = 'году выпуска'
  filter.options = ['Более новые', 'Более старые']
  filter.clicked = false

  return filter
}

// release_date: "1985-02-02"
