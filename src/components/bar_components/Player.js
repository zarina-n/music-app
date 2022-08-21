import PlayerControls from "./PlayerControls";
import PlayerTrack from "./PlayerTrack";
import PlayerLikeDislike from "./PlayerLikeDislike";
import Volume from "./Volume";

import { PlayerBlock, ControlLikeContainer } from "./Bar.styled";

function Player() {
  return (
    <PlayerBlock>
      <ControlLikeContainer>
        <PlayerControls />
        <PlayerTrack author="Ты та..." album="Баста" />
        <PlayerLikeDislike />
      </ControlLikeContainer>
      <Volume />
    </PlayerBlock>
  );
}

export default Player;
