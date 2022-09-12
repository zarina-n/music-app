import styled from "styled-components";

export const StyledCenterBlock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const StyledSearch = styled.div`
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
`;

export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: ${({ theme }) => theme.colors.text};
  fill: transparent;
`;

export const SearchInput = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CenterblockHeading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

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
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const FilterButton = styled.button`
  font-style: normal;
  font-size: 16px;
  border: 1px solid;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.containerColor};
  color: ${({ id, clickedId, theme }) =>
    clickedId === id ? theme.colors.filterActiveColor : theme.colors.text};
  border-color: ${({ id, clickedId, theme }) =>
    clickedId === id ? theme.colors.filterActiveColor : theme.colors.text};

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.filterHoverColor};
    color: ${({ theme }) => theme.colors.filterHoverColor};
    cursor: pointer;
  }
`;

export const FilterOptions = styled.ul`
  position: absolute;
  background: ${({ theme }) => theme.colors.svgBgC};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  border-radius: 12px;
  width: 424px;
  height: 138px;
  visibility: ${({ id, clickedId }) =>
    clickedId === id ? "visible" : "hidden"};

  left: 0;
  top: 30px;
  padding: 36px 34px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 28px;
  column-gap: 20px;

  display: -webkit-box;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-column-gap: 20px;
  -webkit-font-feature-settings: "pnum" on, "lnum" on;
  font-feature-settings: "pnum" on, "lnum" on;

  li:first-child {
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
    color: #b672ff;
  }
`;

export const StyledContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const StyledContentTitle = styled.div`
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
`;

export const ContentColumn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.centerBlockLinks};
  text-transform: uppercase;

  &:first-child {
    width: 447px;
  }

  &:nth-child(2) {
    width: 321px;
  }

  &:nth-child(3) {
    width: 245px;
  }

  &:nth-child(4) {
    width: 60px;
    text-align: end;
  }
`;

export const StyledContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;

export const PlaylistItemContainer = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;

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
`;

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
  width: 447px;
`;

export const TitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.svgBgC};
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
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
  }
`;

export const TitleText = styled.div`
  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};

    span {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.centerBlockLinks};
      margin-left: 10px;
    }
  }
`;

export const Author = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
  }
`;

export const Album = styled.div`
  width: 245px;

  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.centerBlockLinks};
  }
`;

export const SongTime = styled.div`
  color: ${({ theme }) => theme.colors.centerBlockLinks};

  svg {
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.centerBlockLinks};

    span {
      font-size: 16px;
      text-align: right;
      color: ${({ theme }) => theme.colors.centerBlockLinks};
    }
  }
`;
