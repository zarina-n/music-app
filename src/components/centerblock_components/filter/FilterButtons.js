import { useState, useCallback } from 'react'
import { FilterButton, FilterOptions } from '../Centerblock.styled'
import { useSelector, useDispatch } from 'react-redux'
import {
  setFilter,
  resetFilter,
  setFilterOptions,
} from '../../../features/track/trackSlice'
import { getFilter } from './helper'

function FilterButtons() {
  const dispatch = useDispatch()
  const [clickedId, setClickedId] = useState(0)

  const tracks = useSelector((state) => state.track.tracks)
  const filterFromSate = useSelector((state) => state.track.filter)
  const filterOptions = useSelector((state) => state?.track.options)
  const filterToCheck = useSelector((state) => state?.track?.filter)

  const filterByGenre = getFilter(tracks, {
    id: 1,
    filterBy: 'жанру',
    filterByKey: 'genre',
  })

  const filterByAuthor = getFilter(tracks, {
    id: 2,
    filterBy: 'исполнителю',
    filterByKey: 'author',
  })

  const filterByYear = {
    id: 3,
    filterBy: 'году выпуска',
    options: ['Более новые', 'Более старые'],
    filterByKey: 'year',
    clicked: false,
  }

  const stateToggler = useCallback(
    (id, filter) => {
      setClickedId((prevId) => (prevId === id ? null : id))
      dispatch(setFilterOptions(filter))
    },
    [setClickedId, dispatch]
  )

  const filterHandler = (option, filterBy) => {
    const filterData = { option, filterBy }
    dispatch(setFilter({ ...filterData }))

    if (filterFromSate?.option === filterData.option) {
      dispatch(resetFilter(option))
    }

    return
  }

  return (
    <>
      <FilterButton
        style={
          filterByGenre.filterByKey === filterToCheck?.filterBy
            ? { color: '#AD61FF', borderColor: '#AD61FF' }
            : {}
        }
        id={filterByGenre.id}
        clickedId={clickedId}
        key={filterByGenre.id}
        onClick={() => stateToggler(filterByGenre.id, filterByGenre.options)}
      >
        {filterByGenre.filterBy}

        <FilterOptions id={filterByGenre.id} clickedId={clickedId}>
          {filterOptions?.map((option, i) => (
            <li
              style={
                option === filterToCheck?.option
                  ? { color: '#AD61FF', textDecoration: 'underline' }
                  : {}
              }
              key={i}
              onClick={() => {
                filterHandler(option, filterByGenre.filterByKey)
              }}
            >
              {option}
            </li>
          ))}
        </FilterOptions>
      </FilterButton>

      <FilterButton
        style={
          filterByAuthor.filterByKey === filterToCheck?.filterBy
            ? { color: '#AD61FF', borderColor: '#AD61FF' }
            : {}
        }
        id={filterByAuthor.id}
        clickedId={clickedId}
        key={filterByAuthor.id}
        onClick={() => stateToggler(filterByAuthor.id, filterByAuthor.options)}
      >
        {filterByAuthor.filterBy}

        <FilterOptions id={filterByAuthor.id} clickedId={clickedId}>
          {filterOptions?.map((option, i) => (
            <li
              style={
                option === filterToCheck?.option
                  ? { color: '#AD61FF', textDecoration: 'underline' }
                  : {}
              }
              key={`${i} option`}
              onClick={() => filterHandler(option, filterByAuthor.filterByKey)}
            >
              {option}
            </li>
          ))}
        </FilterOptions>
      </FilterButton>

      <FilterButton
        style={
          filterByYear.filterByKey === filterToCheck?.filterBy
            ? { color: '#AD61FF', borderColor: '#AD61FF' }
            : {}
        }
        id={filterByYear.id}
        clickedId={clickedId}
        key={filterByYear.id}
        onClick={() => stateToggler(filterByYear.id, filterByYear.options)}
      >
        {filterByYear.filterBy}

        <FilterOptions id={filterByYear.id} clickedId={clickedId}>
          {filterOptions?.map((option, i) => (
            <li
              style={
                option === filterToCheck?.option
                  ? { color: '#AD61FF', textDecoration: 'underline' }
                  : {}
              }
              key={`${i} option`}
              onClick={() => filterHandler(option, filterByYear.filterByKey)}
            >
              {option}
            </li>
          ))}
        </FilterOptions>
      </FilterButton>
    </>
  )
}

export default FilterButtons
