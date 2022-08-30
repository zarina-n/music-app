import Container from "./Container.styles";
import Bar from "../components/Bar";
import Navigation from "../components/main_components/Navigation";
import { StyledMain } from "../components/main_components/Main.styled";
import {
  StyledCenterBlock,
  CenterblockHeading,
} from "../components/main_components/centerblock_components/Centerblock.styled";
import Search from "../components/main_components/centerblock_components/Search";
import Content from "../components/main_components/centerblock_components/Content";

function MyTracks() {
  return (
    <Container>
      <StyledMain>
        <Navigation />
        <StyledCenterBlock>
          <Search />
          <CenterblockHeading>Мои треки</CenterblockHeading>
          <Content />
        </StyledCenterBlock>
      </StyledMain>
      <Bar />
    </Container>
  );
}

export default MyTracks;
