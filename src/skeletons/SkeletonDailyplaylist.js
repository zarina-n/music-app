import SkeletonElement from "./SkeletonElement";

function SkeletonDailyplaylist() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-playlist-item">
        <SkeletonElement type="playlist-image" />
      </div>
    </div>
  );
}

export default SkeletonDailyplaylist;
