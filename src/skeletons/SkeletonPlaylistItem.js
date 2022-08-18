import SkeletonElement from "./SkeletonElement";

function SkeletonPlaylistItem() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-playlist-item">
        <SkeletonElement type="image" />
        <SkeletonElement type="title-text" />
        <SkeletonElement type="author-text" />
        <SkeletonElement type="album-text" />
      </div>
    </div>
  );
}

export default SkeletonPlaylistItem;
