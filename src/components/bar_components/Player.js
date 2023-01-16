import PlayerTrack from './PlayerTrack'
import PlayerLikeDislike from './PlayerLikeDislike'
import Volume from './Volume'
import { Controls, ControlButton, ShuffleRepeatButton } from './Bar.styled'
import { PlayerBlock, ControlLikeContainer } from './Bar.styled'

import Repeat from '../../assets/Repeat'
import Shuffle from '../../assets/Shuffle'
import Prev from '../../assets/Prev'
import Play from '../../assets/Play'
import Pause from '../../assets/Pause'
import Next from '../../assets/Next'

import { useDispatch } from 'react-redux'
import { getCurrentTrack } from '../../features/track/trackSlice'

function Player({
  isPlaying,
  author,
  name,
  volume,
  setVolume,
  playPause,
  handleRepeat,
  repeat,
  shuffle,
  handleShuffle,
  currentTrack,
  setCurrentTrack,
  index,
  tracks,
}) {
  const dispatch = useDispatch()

  //console.log(tracks)

  const nextTrack = () => {
    setCurrentTrack(tracks[index + 1])
    dispatch(getCurrentTrack(tracks[index + 1]))
  }

  const previousTrack = () => {
    setCurrentTrack(tracks[index - 1])
    dispatch(getCurrentTrack(tracks[index - 1]))
  }
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
        <PlayerTrack author={author} name={name} />
        <PlayerLikeDislike currentTrack={currentTrack} />
      </ControlLikeContainer>
      <Volume volume={volume} setVolume={setVolume} />
    </PlayerBlock>
  )
}

export default Player
