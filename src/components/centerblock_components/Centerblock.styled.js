import styled from 'styled-components'

export const StyledCenterBlock = styled.div`
  width: auto;
  grid-area: 1 / 2 / 2 / 3;
  padding: 20px 40px 20px 111px;
`

export const StyledSearch = styled.form`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
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
  position: relative;
  background-color: ${({ theme }) => theme.colors.centerblockBckGr};

  svg {
    width: 17px;
    height: 17px;
    stroke: ${({ theme }) => theme.colors.text};
    fill: transparent;
    cursor: pointer;
  }
`

export const SearchButton = styled.button`
  background-color: inherit;
  border: none;
  position: absolute;
  left: 1%;
`

export const CancelSearchButton = styled.button`
  background-color: inherit;
  border: none;
  position: absolute;
  left: 95%;

  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`

export const SearchInput = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 30px 14px;

  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
  }

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const CenterblockHeading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;

  @media (max-height: 768px) {
    font-size: 52px;
  }

  @media (max-width: 994px) {
    font-size: 52px;
  }
`

export const ContainerForHeadingAndFilters = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.centerblockBckGr};
`

export const StyledFilter = styled.div`
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
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  margin-right: 15px;
`
export const FilterButton = styled.div`
  label {
    cursor: pointer;
  }

  border: 1px solid;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.containerColor};

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.filterHoverColor};
    color: ${({ theme }) => theme.colors.filterHoverColor};
    cursor: pointer;
  }

  @media (max-width: 994px) {
    font-size: 12px;
  }

  @media (max-width: 860px) {
    font-size: 10px;
  }

  @media (max-width: 815px) {
    font-size: 8px;
  }
`

export const FilterOptions = styled.ul`
  position: absolute;
  background: ${({ theme }) => theme.colors.noteSvgBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  border-radius: 12px;
  width: 248px;
  max-height: 305px;
  overflow: hidden;
  overflow-y: scroll;

  @media (max-width: 994px) {
    font-size: 13px;
  }

  visibility: ${({ id, clickedId }) =>
    clickedId === id ? 'visible' : 'hidden'};

  left: 0;
  top: 30px;
  padding: 36px 34px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  column-gap: 20px;

  li {
    color: ${({ chosen, theme }) =>
      chosen ? theme.colors.filterActiveColor : theme.colors.text};
    text-decoration-line: ${({ chosen }) => (chosen ? 'underline' : 'none')};
  }

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #4b4949;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ededed;
    border-radius: 10px;
    border: 4px solid #ffffff;
  }

  * {
    scrollbar-width: none;
    scrollbar-color: #ededed #4b4949;
  }

  li:hover {
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
    color: #b672ff;
  }
`

export const StyledContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  height: 80vh;
  overflow: scroll;
  margin-bottom: 20px;

  @media (max-height: 960px) {
    height: 75vh;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  * {
    scrollbar-width: none;
  }
`

export const StyledContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-right: 5px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: flex-start;
  margin-bottom: 24px;

  svg {
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
`

export const ContentColumn = styled.div`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.centerBlockLinks};
  text-transform: uppercase;

  @media (max-width: 994px) {
    font-size: 12px;
  }

  &:first-child {
    width: 40%;
  }

  &:nth-child(2) {
    width: 30%;
  }

  &:nth-child(3) {
    width: 20%;
  }

  &:nth-child(4) {
    width: 10%;
    text-align: center;
  }
`

export const StyledContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`

export const PlaylistItemContainer = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
  padding-right: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 1s ease;

  &:hover {
    border: 1px solid #888;
  }

  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
`

export const Title = styled.div`
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
  width: 40%;
`

export const TitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.noteSvgBackground};
  cursor: pointer;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;

  svg {
    width: 20px;
    height: 18px;
  }
`

export const TitleText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: ${({ theme }) => theme.colors.text};

    span {
      color: ${({ theme }) => theme.colors.centerBlockLinks};
      margin-left: 10px;
    }
  }
`

export const Author = styled.div`
  width: 30%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
  }
`

export const Album = styled.div`
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: ${({ theme }) => theme.colors.centerBlockLinks};
  }

  @media (max-width: 880px) {
    display: none;
  }
`

export const SongTime = styled.div`
  color: ${({ theme }) => theme.colors.centerBlockLinks};
  width: 10%;

  svg {
    width: 18px;
    height: 15px;
    margin-right: 17px;
    cursor: pointer;
    fill: ${({ favorite, theme }) =>
      favorite === true ? theme.colors.likeDislike : 'transparent'};

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

  span {
    text-align: right;
    color: ${({ theme }) => theme.colors.centerBlockLinks};
  }
`
