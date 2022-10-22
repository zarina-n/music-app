import { Controls, ControlButton, ShuffleRepeatButton } from './Bar.styled'

import Repeat from '../../assets/Repeat'
import Shuffle from '../../assets/Shuffle'
import Prev from '../../assets/Prev'
import Play from '../../assets/Play'
import Pause from '../../assets/Pause'
import Next from '../../assets/Next'

function PlayerControls({
  isPlaying,
  setIsPlaying,
  previousTrack,
  nextTrack,
  repeatTrack,
  repeat,
  shuffleTrack,
}) {
  const playPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <Controls>
      <ControlButton>
        <Prev alt="prev" onClick={previousTrack} />
      </ControlButton>

      <ControlButton onClick={playPause}>
        {isPlaying ? <Pause alt="pause" /> : <Play alt="play" />}
      </ControlButton>

      <ControlButton>
        <Next alt="next" onClick={nextTrack} />
      </ControlButton>

      <ShuffleRepeatButton repeat={repeat}>
        <Repeat alt="repeat" onClick={repeatTrack} />
      </ShuffleRepeatButton>

      <ShuffleRepeatButton>
        <Shuffle alt="shuffle" onClick={shuffleTrack} />
      </ShuffleRepeatButton>
    </Controls>
  )
}

export default PlayerControls
