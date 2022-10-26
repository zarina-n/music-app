import styled from 'styled-components'

export const StyledBar = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.bar};
`

export const StyledBarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const PlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  cursor: pointer;

  div {
    background: ${({ theme }) => theme.colors.progressBar};
    height: 5px;
  }
`

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
  height: 100%;
`

export const ControlLikeContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`

export const Controls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 73px;

  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;

  width: ${(props) => props.width};
`

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

  svg {
    fill: ${({ theme }) => theme.colors.controls};

    &:hover {
      stroke: ${({ theme }) => theme.colors.controlsHover};
    }

    &:active {
      stroke: ${({ theme }) => theme.colors.controlsActive};
    }
  }
`

export const ShuffleRepeatButton = styled.div`
  padding: 5px;
  margin-right: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;

  svg {
    fill: ${({ theme, repeat }) =>
      repeat
        ? theme.colors.shuffleRepeatSvgActive
        : theme.colors.shuffleRepeatSvg};

    &:hover {
      stroke: ${({ theme }) => theme.colors.shuffleRepeatSvgHover};
    }

    /* &:active {
      stroke: ${({ theme }) => theme.colors.shuffleRepeatSvgActive};
    } */
  }
`

export const ControlSvg = styled.svg``

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
`

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
`

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;

  svg {
    stroke: ${({ theme }) => theme.colors.controlsActive};
  }
`

export const VolumeProgress = styled.div`
  width: 109px;

  input {
    width: 109px;
    height: 22px;
    -webkit-appearance: none;
    margin: 10px 0;
    // width: 100%;
    background-color: transparent;

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 1px;
      cursor: pointer;
      background: #d9d9d9;
      border-radius: 1px;
      border: 1px solid #d9d9d9;
    }

    &::-webkit-slider-thumb {
      border: 2px solid #ffffff;
      height: 14px;
      width: 13px;
      border-radius: 18px;
      background: #1a1a1a;
      /* cursor: auto; */
      -webkit-appearance: none;
      margin-top: -8px;
    }
  }
`

export const ContainContainer = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const ContainImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: ${({ theme }) => theme.colors.noteSvgBackground};
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
  -ms-grid-row-span: 2;
  grid-area: image;
`

export const ContainAuthor = styled.div`
  grid-area: author;
  min-width: 49px;

  a {
    font-size: 16px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const ContainAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
  a {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text};
  }
`

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
  gap: 30px;

  svg {
    stroke: ${({ theme }) => theme.colors.likeDislike};
    cursor: pointer;

    &:hover {
      stroke: ${({ theme }) => theme.colors.controlsHover};
    }

    &:active {
      stroke: ${({ theme }) => theme.colors.controlsHover};
      fill: ${({ theme }) => theme.colors.likeDislike};
    }
  }
`
