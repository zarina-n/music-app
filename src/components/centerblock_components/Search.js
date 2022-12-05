import React, { useState, useEffect } from 'react'
import { StyledSearch, SearchInput } from './Centerblock.styled'
import { useDispatch } from 'react-redux'
import { setSearchedValue } from '../../features/track/trackSlice'

import SearchSvg from '../../assets/SearchSvg'

function Search() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(setSearchedValue(search))
  // }, [search, dispatch])

  return (
    <StyledSearch
      onSubmit={(event) => {
        event.preventDefault()
        dispatch(setSearchedValue(search))
        setSearch('')
      }}
    >
      <SearchSvg />
      <SearchInput
        placeholder="Поиск"
        name="search"
        type="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      ></SearchInput>
    </StyledSearch>
  )
}

export default Search
