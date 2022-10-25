import { useState, useCallback } from 'react'
import { FilterButton, FilterOptions } from './Centerblock.styled'
import FILTER_DATA from '../../dummy-data/filter-data'
import { useSelector } from 'react-redux'
import { selectAllTracks } from '../../features/track/trackSlice'

function FilterButtons() {
  const [clickedId, setClickedId] = useState(0)
  const tracks = useSelector(selectAllTracks)

  const genres = [...new Set(tracks?.map((data) => data.genre))]
  const byGenre = {}

  for (let i = 0; i < genres.length; i++) {
    const tracksArray = []
    for (let k = 0; k < tracks.length; k++) {
      if (tracks[k].genre === genres[i]) {
        tracksArray.push(tracks[k])
      }
    }
    byGenre[genres[i]] = [tracksArray]
  }
  // console.log(byGenre)

  const years = [
    ...new Set(
      tracks?.map((data) => Number(data.release_date?.substring(0, 4)))
    ),
  ]

  const byYear = {}
  for (let i = 0; i < years.length; i++) {
    const tracksArray = []
    for (let k = 0; k < tracks.length; k++) {
      if (Number(tracks[k].release_date?.substring(0, 4)) === years[i]) {
        tracksArray.push(tracks[k])
      }
    }
    byYear[years[i]] = [tracksArray]
  }
  // console.log(byYear)
  const byAuthor = {}
  const authors = [...new Set(tracks?.map((data) => data.author))]

  for (let i = 0; i < authors.length; i++) {
    const tracksArray = []
    for (let k = 0; k < tracks.length; k++) {
      if (tracks[k].author === authors[i]) {
        tracksArray.push(tracks[k])
      }
    }
    byAuthor[authors[i]] = [tracksArray]
  }
  console.log(byAuthor)

  const stateToggler = useCallback(
    (id) => {
      setClickedId((prevId) => (prevId === id ? null : id))
    },
    [setClickedId]
  )

  return (
    <>
      {FILTER_DATA.map(({ filterBy, id, options }) => (
        <FilterButton
          id={id}
          clickedId={clickedId}
          key={id}
          onClick={() => stateToggler(id)}
        >
          {filterBy}

          <FilterOptions id={id} clickedId={clickedId} key={options.option}>
            {options.map(({ option, optionId }) => (
              <li key={optionId}>{option}</li>
            ))}
          </FilterOptions>
        </FilterButton>
      ))}
    </>
  )
}

export default FilterButtons
