import PlayerControls from './PlayerControls'
import PlayerTrack from './PlayerTrack'
import PlayerLikeDislike from './PlayerLikeDislike'
import Volume from './Volume'
import { useSelector } from 'react-redux'
import { selectCurrentTrack } from '../../features/track/trackSlice'

import { PlayerBlock, ControlLikeContainer } from './Bar.styled'

function Player({ isPlaying, setIsPlaying, audioRef }) {
  const track = useSelector(selectCurrentTrack)
  return (
    <PlayerBlock>
      <ControlLikeContainer>
        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
        <PlayerTrack author={track?.name} album={track?.album} />
        <PlayerLikeDislike />
      </ControlLikeContainer>
      <Volume />
    </PlayerBlock>
  )
}

export default Player
