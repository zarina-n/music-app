import SkeletonElement from "./SkeletonElement";

function SkeletonDailyplaylist({ theme }) {
  const themeClass = theme;
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-playlist-item">
        <SkeletonElement type="playlist-image" />
      </div>
    </div>
  );
}

export default SkeletonDailyplaylist;
