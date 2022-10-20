import React from 'react'
import { StyledFilter, FilterTitle } from './Centerblock.styled'
import FilterButtons from './FilterButtons'

function Filter() {
  return (
    <StyledFilter>
      <FilterTitle>Искать по:</FilterTitle>
      <FilterButtons />
    </StyledFilter>
  )
}

export default Filter
