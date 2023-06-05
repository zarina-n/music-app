import React from 'react'
import { StyledFilter, FilterTitle } from '../Centerblock.styled'
import FilterButtons from './FilterButtons'
import { useTranslation } from 'react-i18next'

function Filter() {
  const { t } = useTranslation(['home'])

  return (
    <StyledFilter>
      <FilterTitle>{t('searchBy')}</FilterTitle>
      <FilterButtons />
    </StyledFilter>
  )
}

export default Filter
