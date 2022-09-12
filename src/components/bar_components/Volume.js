import {
  BarVolumeBlock,
  VolumeContent,
  VolumeImage,
  VolumeProgress,
} from "./Bar.styled";

import VolumeIcon from "../../assets/VolumeIcon";

function Volume() {
  return (
    <BarVolumeBlock>
      <VolumeContent>
        <VolumeImage>
          <VolumeIcon alt="volume" />
        </VolumeImage>
        <VolumeProgress>
          <input type="range" name="range" />
        </VolumeProgress>
      </VolumeContent>
    </BarVolumeBlock>
  );
}

export default Volume;
