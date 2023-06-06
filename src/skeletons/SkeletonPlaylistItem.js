import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

function SkeletonPlaylistItem({ theme }) {
  const themeClass = theme || 'dark'
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-playlist-item">
        <SkeletonElement type="image" />
        <SkeletonElement type="title-text" />
        <SkeletonElement type="author-text" />
        <SkeletonElement type="album-text" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonPlaylistItem
