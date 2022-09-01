import { Controls, ControlButton, ControlSvg } from "./Bar.styled";

function PlayerControls({ isPlaying, setIsPlaying }) {
  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Controls>
      <ControlButton>
        <ControlSvg alt="prev">
          <use href="img/icon/sprite.svg#icon-prev"></use>
        </ControlSvg>
      </ControlButton>

      <ControlButton onClick={playPause}>
        {isPlaying ? (
          <ControlSvg width="22px" height="20px" alt="pause">
            <use href="img/icon/sprite.svg#icon-pause"></use>
          </ControlSvg>
        ) : (
          <ControlSvg width="22px" height="20px" alt="play">
            <use href="img/icon/sprite.svg#icon-play"></use>
          </ControlSvg>
        )}
      </ControlButton>

      <ControlButton>
        <ControlSvg fill="inherit" stroke="#d9d9d9" alt="next">
          <use href="img/icon/sprite.svg#icon-next"></use>
        </ControlSvg>
      </ControlButton>

      <ControlButton>
        <ControlSvg width="18px" height="22px" stroke={"#696969"} alt="repeat">
          <use href="img/icon/sprite.svg#icon-repeat"></use>
        </ControlSvg>
      </ControlButton>

      <ControlButton>
        <ControlSvg
          width={"19px"}
          height={"12px"}
          fill={"transparent"}
          stroke={"#696969"}
          alt="shuffle"
        >
          <use href="img/icon/sprite.svg#icon-shuffle"></use>
        </ControlSvg>
      </ControlButton>
    </Controls>
  );
}

export default PlayerControls;
