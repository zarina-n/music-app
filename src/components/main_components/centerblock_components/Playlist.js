import { useState, useEffect } from "react";
import {
  StyledContentPlaylist,
  PlaylistItem,
  Title,
  TitleImage,
  TitleText,
  Author,
  Album,
  Time,
} from "../../../styles/Centerblock.styled";
import PLAYLIST_DATA from "../../../dummy-data/playlist-data";
import SkeletonPlaylistItem from "../../../skeletons/SkeletonPlaylistItem";

function Playlist() {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPlaylistData(PLAYLIST_DATA);
    }, 5000);
  });

  return (
    <StyledContentPlaylist>
      {playlistData &&
        playlistData.map(({ name, id, description, author, album, time }) => (
          <PlaylistItem key={id}>
            <div>
              <Title>
                <TitleImage>
                  <svg>
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </TitleImage>
                <TitleText>
                  <a href="http://">
                    {name}
                    <span>{description}</span>
                  </a>
                </TitleText>
              </Title>

              <Author>
                <a href="http://">{author}</a>
              </Author>

              <Album>
                <a href="http://">{album}</a>
              </Album>

              <Time>
                <svg alt="time">
                  <use href="img/icon/sprite.svg#icon-like" />
                </svg>
                <span>{time}</span>
              </Time>
            </div>
          </PlaylistItem>
        ))}

      {!playlistData &&
        Array.from({ length: 10 }).map((item) => (
          <SkeletonPlaylistItem key={item} />
        ))}
    </StyledContentPlaylist>
  );
}

export default Playlist;
