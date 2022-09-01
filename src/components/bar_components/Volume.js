import {
  BarVolumeBlock,
  VolumeContent,
  VolumeImage,
  VolumeProgress,
} from "./Bar.styled";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function Volume() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <BarVolumeBlock>
      <VolumeContent>
        <VolumeImage>
          {darkTheme ? (
            <svg>
              <use xlinkHref="img/icon/sprite.svg#icon-volume" />
            </svg>
          ) : (
            <svg>
              <use xlinkHref="img/icon/sprite.svg#icon-volume-light" />
            </svg>
          )}
        </VolumeImage>
        <VolumeProgress>
          <input type="range" name="range" />
        </VolumeProgress>
      </VolumeContent>
    </BarVolumeBlock>
  );
}

export default Volume;
