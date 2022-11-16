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
// import { useEffect } from 'react'

function Player({
  isPlaying,
  setIsPlaying,
  audioRef,
  album,
  name,
  volume,
  setVolume,
}) {
  const playPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  return (
    <PlayerBlock>
      <ControlLikeContainer>
        <Controls>
          <ControlButton>
            <Prev alt="prev" />
          </ControlButton>

          <ControlButton onClick={playPause}>
            {isPlaying ? <Pause alt="pause" /> : <Play alt="play" />}
          </ControlButton>

          <ControlButton>
            <Next alt="next" />
          </ControlButton>

          <ShuffleRepeatButton>
            <Repeat alt="repeat" />
          </ShuffleRepeatButton>

          <ShuffleRepeatButton>
            <Shuffle alt="shuffle" />
          </ShuffleRepeatButton>
        </Controls>
        <PlayerTrack album={album} name={name} />
        <PlayerLikeDislike />
      </ControlLikeContainer>
      <Volume volume={volume} setVolume={setVolume} />
    </PlayerBlock>
  )
}

export default Player
