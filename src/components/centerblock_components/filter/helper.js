export const getFilter = (tracks, { id, filterBy, filterByKey }) => {
  const filters = [...new Set(tracks?.map((data) => data[filterByKey]))]
  const filter = {
    id,
    filterBy,
    filterByKey,
    options: [],
  }

  for (let i = 0; i < filters.length; i++) {
    filter.options.push({ option: filters[i], chosen: false })
  }
  return filter
}
