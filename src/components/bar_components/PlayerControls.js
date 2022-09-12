import { Controls, ControlButton, ShuffleRepeatButton } from "./Bar.styled";

import Repeat from "../../assets/Repeat";
import Shuffle from "../../assets/Shuffle";
import Prev from "../../assets/Prev";
import Play from "../../assets/Play";
import Pause from "../../assets/Pause";
import Next from "../../assets/Next";

function PlayerControls({ isPlaying, setIsPlaying }) {
  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
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
  );
}

export default PlayerControls;
