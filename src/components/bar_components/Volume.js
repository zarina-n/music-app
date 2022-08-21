import {
  BarVolumeBlock,
  VolumeContent,
  VolumeImage,
  VolumeProgress,
} from "./Bar.styled";

function Volume() {
  return (
    <BarVolumeBlock>
      <VolumeContent>
        <VolumeImage>
          <svg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </VolumeImage>
        <VolumeProgress>
          <input type="range" name="range" />
        </VolumeProgress>
      </VolumeContent>
    </BarVolumeBlock>
  );
}

export default Volume;
