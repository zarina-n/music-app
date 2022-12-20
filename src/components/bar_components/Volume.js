import {
  BarVolumeBlock,
  VolumeContent,
  VolumeImage,
  VolumeProgress,
} from './Bar.styled'

import VolumeIcon from '../../assets/VolumeIcon'
import Mute from '../../assets/Mute'

function Volume({ volume, setVolume }) {
  return (
    <BarVolumeBlock>
      <VolumeContent>
        <VolumeImage>
          {volume > 0 ? <VolumeIcon alt="volume" /> : <Mute alt="mute" />}
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
