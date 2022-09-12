import { useState, useEffect } from "react";
import { StyledContentPlaylist } from "./Centerblock.styled";
import PLAYLIST_DATA from "../../../dummy-data/playlist-data";
import SkeletonPlaylistItem from "../../../skeletons/SkeletonPlaylistItem";
import PlaylistItem from "./PlaylistItem";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

function Playlist() {
  const { darkTheme } = useContext(ThemeContext);
  const [playlistData, setPlaylistData] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaylistData(PLAYLIST_DATA);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledContentPlaylist>
      {playlistData && <PlaylistItem playlistData={playlistData} />}

      {!playlistData &&
        Array.from({ length: 10 }).map((item, index) => (
          <SkeletonPlaylistItem
            key={`${index} + 1`}
            theme={darkTheme ? "dark" : "light"}
          />
        ))}
    </StyledContentPlaylist>
  );
}

export default Playlist;
