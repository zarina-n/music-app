import {
  ContainContainer,
  ContainImage,
  ContainAuthor,
  ContainAlbum,
} from "./Bar.styled";

function PlayerTrack(props) {
  return (
    <ContainContainer>
      <ContainImage>
        <svg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </svg>
      </ContainImage>
      <ContainAuthor>
        <a href="http://">{props.author}</a>
      </ContainAuthor>
      <ContainAlbum>
        <a href="http://">{props.album}</a>
      </ContainAlbum>
    </ContainContainer>
  );
}

export default PlayerTrack;
