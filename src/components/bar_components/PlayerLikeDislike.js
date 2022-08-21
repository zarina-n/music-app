import { LikeDislikeDiv, LikeDislikeIcons } from "./Bar.styled";

function PlayerLikeDislike() {
  return (
    <LikeDislikeDiv>
      <LikeDislikeIcons>
        <svg alt="like">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </svg>
      </LikeDislikeIcons>
      <LikeDislikeIcons>
        <svg alt="dislike">
          <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
        </svg>
      </LikeDislikeIcons>
    </LikeDislikeDiv>
  );
}

export default PlayerLikeDislike;
