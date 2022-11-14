/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import { FilterButton, FilterOptions } from '../Centerblock.styled'
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredOptions, getGenres, getAuthors, getYears } from './utils'
import { getFilteredTracksByGenre } from '../../../features/track/trackSlice'

function FilterButtons() {
  const dispatch = useDispatch()
  const [clickedId, setClickedId] = useState(0)

  const tracks = useSelector((state) => state.track.tracks)
  const genres = useSelector((state) => state.track.genres)
  const filterByGenre = {}
  const filterByAuthor = {}
  const filterByYear = {}

  getGenres(tracks, filterByGenre)
  getAuthors(tracks, filterByAuthor)
  getYears(tracks, filterByYear)

  const stateToggler = useCallback(
    (id) => {
      setClickedId((prevId) => (prevId === id ? null : id))
    },
    [setClickedId]
  )

  // console.log(filterByGenre)

  return (
    <>
      <FilterButton
        id={filterByGenre.id}
        clickedId={clickedId}
        key={filterByGenre.id}
        onClick={() => stateToggler(filterByGenre.id)}
      >
        {filterByGenre.filterBy}

        <FilterOptions id={filterByGenre.id} clickedId={clickedId}>
          {filterByGenre.options.map((option, i) => (
            <li key={`${i} option`}>{option}</li>
          ))}
        </FilterOptions>
      </FilterButton>
    </>
  )
}

export default FilterButtons

// {filters.map(({ filterBy, id, options }) => (
//   <FilterButton
//     id={id}
//     clickedId={clickedId}
//     key={id}
//     onClick={() => stateToggler(id)}
//   >
//     {filterBy}

//     <FilterOptions id={id} clickedId={clickedId} key={options.option}>
//       {options.map((option, i) => (
//         <li key={`${i} option`}>{option}</li>
//       ))}
//     </FilterOptions>
//   </FilterButton>
// ))}
