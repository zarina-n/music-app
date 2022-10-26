import {
  BarVolumeBlock,
  VolumeContent,
  VolumeImage,
  VolumeProgress,
} from './Bar.styled'

import VolumeIcon from '../../assets/VolumeIcon'

function Volume({ volume, setVolume }) {
  return (
    <BarVolumeBlock>
      <VolumeContent>
        <VolumeImage>
          <VolumeIcon alt="volume" />
        </VolumeImage>
        <VolumeProgress>
          <input
            max="100"
            min="0"
            value={volume}
            onChange={(event) => setVolume(event.target.value)}
            type="range"
          />
        </VolumeProgress>
      </VolumeContent>
    </BarVolumeBlock>
  )
}

export default Volume
