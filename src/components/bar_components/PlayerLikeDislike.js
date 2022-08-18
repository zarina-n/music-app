import styled from "styled-components";

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

const LikeDislikeDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 16%;
`;

const LikeDislikeIcons = styled.div`
  padding: 5px;

  svg {
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    cursor: pointer;
    margin-right: 28.5px;
  }

  svg:hover {
    stroke: #acacac;
  }

  svg:active {
    fill: #696969;
    stroke: #ffffff;
  }
`;
