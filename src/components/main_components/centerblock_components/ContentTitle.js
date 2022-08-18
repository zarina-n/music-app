import {
  StyledContentTitle,
  ContentColumn,
} from "../../../styles/Centerblock.styled";

function ContentTitle() {
  return (
    <StyledContentTitle>
      <ContentColumn>Трек</ContentColumn>
      <ContentColumn>Исполнитель</ContentColumn>
      <ContentColumn>Альбом</ContentColumn>
      <ContentColumn>
        <svg>
          <use href="img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </ContentColumn>
    </StyledContentTitle>
  );
}

export default ContentTitle;
