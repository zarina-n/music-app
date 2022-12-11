import React, { useState } from 'react'
import {
  StyledSearch,
  SearchInput,
  SearchButton,
  CancelSearchButton,
} from './Centerblock.styled'
import { useDispatch } from 'react-redux'
import {
  setSearchedValue,
  resetSearchedValue,
  resetFilter,
} from '../../features/track/trackSlice'

import SearchSvg from '../../assets/SearchSvg'
import Cross from '../../assets/Cross'

function Search() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  return (
    <StyledSearch
      onSubmit={(event) => {
        event.preventDefault()
        dispatch(setSearchedValue(search))
      }}
    >
      <SearchButton>
        <SearchSvg />
      </SearchButton>
      <SearchInput
        placeholder="Поиск"
        name="search"
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      />
      <CancelSearchButton
        onClick={() => {
          dispatch(resetSearchedValue())
          dispatch(resetFilter())
          setSearch('')
        }}
      >
        <Cross />
      </CancelSearchButton>
    </StyledSearch>
  )
}

export default Search
