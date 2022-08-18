import { Controls, ControlButton } from "../../styles/Bar.styled";

function PlayerControls() {
  return (
    <Controls>
      <ControlButton>
        <svg width={"15px"} height={"14px"} alt="prev">
          <use href="img/icon/sprite.svg#icon-prev"></use>
        </svg>
      </ControlButton>

      <ControlButton>
        <svg
          width={"22px"}
          height={"20px"}
          fill={"#transparent"}
          stroke={"#696969"}
          alt="play"
        >
          <use href="img/icon/sprite.svg#icon-play"></use>
        </svg>
      </ControlButton>

      <ControlButton>
        <svg
          width={"15px"}
          height={"14px"}
          fill={"inherit"}
          stroke={"#d9d9d9"}
          alt="next"
        >
          <use href="img/icon/sprite.svg#icon-next"></use>
        </svg>
      </ControlButton>

      <ControlButton>
        <svg
          width={"18px"}
          height={"22px"}
          fill={"transparent"}
          stroke={"#696969"}
          alt="repeat"
        >
          <use href="img/icon/sprite.svg#icon-repeat"></use>
        </svg>
      </ControlButton>

      <ControlButton>
        <svg
          width={"19px"}
          height={"12px"}
          fill={"transparent"}
          stroke={"#696969"}
          alt="shuffle"
        >
          <use href="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </ControlButton>
    </Controls>
  );
}

export default PlayerControls;
