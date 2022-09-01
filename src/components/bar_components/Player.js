import PlayerControls from "./PlayerControls";
import PlayerTrack from "./PlayerTrack";
import PlayerLikeDislike from "./PlayerLikeDislike";
import Volume from "./Volume";

import { PlayerBlock, ControlLikeContainer } from "./Bar.styled";

function Player({ isPlaying, setIsPlaying, audioRef }) {
  return (
    <PlayerBlock>
      <ControlLikeContainer>
        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
        <PlayerTrack author="Ты та..." album="Баста" />
        <PlayerLikeDislike />
      </ControlLikeContainer>
      <Volume />
    </PlayerBlock>
  );
}

export default Player;
