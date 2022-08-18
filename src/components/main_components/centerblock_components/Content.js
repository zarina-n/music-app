import React from "react";
import { StyledContent } from "../../../styles/Centerblock.styled";
import ContentTitle from "./ContentTitle";
import Playlist from "./Playlist";

function Content() {
  return (
    <StyledContent>
      <ContentTitle />
      <Playlist />
    </StyledContent>
  );
}

export default Content;
