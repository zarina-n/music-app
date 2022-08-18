import {
  StyledBar,
  StyledBarContent,
  PlayerProgress,
} from "../styles/Bar.styled";
import Player from "./bar_components/Player";

function Bar() {
  return (
    <StyledBar>
      <StyledBarContent>
        <PlayerProgress />
        <Player />
      </StyledBarContent>
    </StyledBar>
  );
}

export default Bar;
