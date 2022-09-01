import { useState, useEffect } from "react";
import { StyledContentPlaylist } from "./Centerblock.styled";
import PLAYLIST_DATA from "../../../dummy-data/playlist-data";
import SkeletonPlaylistItem from "../../../skeletons/SkeletonPlaylistItem";
import PlaylistItem from "./PlaylistItem";

function Playlist() {
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
        Array.from({ length: 10 }).map((item) => (
          <SkeletonPlaylistItem key={item} />
        ))}
    </StyledContentPlaylist>
  );
}

export default Playlist;
