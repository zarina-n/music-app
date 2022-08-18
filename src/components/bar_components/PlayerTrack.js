//import {} from "../styles/Bar.styled";
import styled from "styled-components";

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

const ContainContainer = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const ContainImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;

  svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
  }
`;

const ContainAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;

  a {
    font-size: 16px;
    white-space: nowrap;
  }
`;

const ContainAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
  a {
    font-size: 13px;
  }
`;
