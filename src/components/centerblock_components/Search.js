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

import { useTranslation } from 'react-i18next'

function Search() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const { t } = useTranslation(['home'])

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
        placeholder={t('search')}
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
