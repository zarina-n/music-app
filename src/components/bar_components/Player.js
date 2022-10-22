import PlayerControls from './PlayerControls'
import PlayerTrack from './PlayerTrack'
import PlayerLikeDislike from './PlayerLikeDislike'
import Volume from './Volume'
// import { useSelector } from 'react-redux'
// import { selectCurrentTrack } from '../../features/track/trackSlice'

import { PlayerBlock, ControlLikeContainer } from './Bar.styled'

function Player({
  isPlaying,
  setIsPlaying,
  audioRef,
  album,
  name,
  nextTrack,
  previousTrack,
  repeatTrack,
  repeat,
  shuffleTrack,
}) {
  return (
    <PlayerBlock>
      <ControlLikeContainer>
        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          nextTrack={nextTrack}
          previousTrack={previousTrack}
          repeatTrack={repeatTrack}
          repeat={repeat}
          shuffleTrack={shuffleTrack}
        />
        <PlayerTrack album={album} name={name} />
        <PlayerLikeDislike />
      </ControlLikeContainer>
      <Volume />
    </PlayerBlock>
  )
}

export default Player
