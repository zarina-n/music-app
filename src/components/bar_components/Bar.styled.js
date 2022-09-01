import styled from "styled-components";

export const StyledBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.bar};
`;

export const StyledBarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const PlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  cursor: pointer;

  div {
    background: ${({ theme }) => theme.colors.progressBar};
    height: 5px;
  }
`;

export const PlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const ControlLikeContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const Controls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;

  width: ${(props) => props.width};
`;

export const ControlButton = styled.div`
  padding: 5px;
  margin-right: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;

  &:hover svg {
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.controlsHover};
  }

  &:active svg {
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.controlsActive};
  }
`;

export const ControlSvg = styled.svg`
  width: ${({ width }) => width || " 15px"};
  height: ${({ height }) => height || "14px"};
  fill: ${({ fill }) => fill || "transparent"};
  stroke: ${({ stroke, theme }) => stroke || theme.colors.controls};

  &:hover svg {
    fill: ${({ theme }) => theme.colors.controlsHover};
    stroke: ${({ theme }) => theme.colors.controlsHover};
  }

  &:active svg {
    fill: ${({ theme }) => theme.colors.controlsActive};
    stroke: ${({ theme }) => theme.colors.controlsActive};
  }
`;

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
  justify-content: end;
`;

export const VolumeContent = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;

  svg {
    width: 13px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.controls};
  }
`;

export const VolumeProgress = styled.div`
  width: 109px;

  input {
    width: 109px;
  }
`;

export const ContainContainer = styled.div`
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

export const ContainImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: ${({ theme }) => theme.colors.svgBgC};
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

export const ContainAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;

  a {
    font-size: 16px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ContainAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
  a {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LikeDislikeDiv = styled.div`
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

export const LikeDislikeIcons = styled.div`
  padding: 5px;

  svg {
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.controls};
    cursor: pointer;
    margin-right: 28.5px;
  }

  svg:hover {
    stroke: ${({ theme }) => theme.colors.controlsHover};
  }

  svg:active {
    fill: ${({ theme }) => theme.colors.likeDislikeActive};
    stroke: #ffffff;
  }
`;
