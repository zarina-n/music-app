export const getFilter = (tracks, { id, filterBy, filterByKey }) => {
  const filter = {
    id,
    filterBy,
    filterByKey,
    options: [...new Set(tracks?.map((data) => data[filterByKey]))],
    clicked: false,
  }

  return filter
}
