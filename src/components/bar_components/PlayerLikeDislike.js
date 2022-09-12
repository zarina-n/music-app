import { LikeDislikeDiv } from "./Bar.styled";

import Like from "../../assets/Like";
import Dislike from "../../assets/Dislike";

function PlayerLikeDislike() {
  return (
    <LikeDislikeDiv>
      <Like stroke={"#696969"} alt="like" />
      <Dislike stroke={"#696969"} alt="dislike" />
    </LikeDislikeDiv>
  );
}

export default PlayerLikeDislike;
