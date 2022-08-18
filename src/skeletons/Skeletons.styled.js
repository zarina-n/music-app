import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  background-color: #313131;

  .div {
    display: flex;
    flex-direction: row;
  }
`;

export const SkeletonTitle = styled.div`
  width: 356px;
  height: 19px;
  margin: 15px;
`;

export const SkeletonAuthor = styled.div`
  width: 251px;
  height: 19px;
  margin: 15px;
`;

export const SkeletonAlbum = styled.div`
  width: 305px;
  height: 19px;
  margin: 15px;
`;

export const SkeletonTrackImage = styled.div`
  width: 51px;
  height: 51px;
  margin: 10px;
`;

export const SkeletonPlaylistImage = styled.div`
  width: 250px;
  height: 150px;
  margin: 30px;
`;
