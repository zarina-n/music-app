export const getFilter = (tracks, { id, filterBy, filterByKey }) => {
  const filters = [...new Set(tracks?.map((data) => data[filterByKey]))]
  const filter = {
    id,
    filterBy,
    filterByKey,
    options: filters,
  }

  return filter
}
