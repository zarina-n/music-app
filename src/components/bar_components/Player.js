// import PlayerControls from './PlayerControls'
import PlayerTrack from './PlayerTrack'
import PlayerLikeDislike from './PlayerLikeDislike'
import Volume from './Volume'
import { Controls, ControlButton, ShuffleRepeatButton } from './Bar.styled'

import Repeat from '../../assets/Repeat'
import Shuffle from '../../assets/Shuffle'
import Prev from '../../assets/Prev'
import Play from '../../assets/Play'
import Pause from '../../assets/Pause'
import Next from '../../assets/Next'

import { PlayerBlock, ControlLikeContainer } from './Bar.styled'

function Player({
  isPlaying,
  album,
  name,
  volume,
  setVolume,
  playPause,
  handleRepeat,
  repeat,
  nextTrack,
  previousTrack,
  shuffleTracks,
  shuffle,
  handleShuffle,
  currentTrack,
}) {
  return (
    <PlayerBlock>
      <ControlLikeContainer>
        <Controls>
          <ControlButton onClick={previousTrack}>
            <Prev alt="prev" />
          </ControlButton>

          <ControlButton onClick={playPause}>
            {isPlaying ? <Pause alt="pause" /> : <Play alt="play" />}
          </ControlButton>

          <ControlButton onClick={nextTrack}>
            <Next alt="next" />
          </ControlButton>

          <ShuffleRepeatButton onClick={handleRepeat} repeat={repeat}>
            <Repeat alt="repeat" />
          </ShuffleRepeatButton>

          <ShuffleRepeatButton onClick={handleShuffle} shuffle={shuffle}>
            <Shuffle alt="shuffle" />
          </ShuffleRepeatButton>
        </Controls>
        <PlayerTrack album={album} name={name} />
        <PlayerLikeDislike currentTrack={currentTrack} />
      </ControlLikeContainer>
      <Volume volume={volume} setVolume={setVolume} />
    </PlayerBlock>
  )
}

export default Player
