import {
  StyledCenterBlock,
  CenterblockHeading,
} from "./centerblock_components/Centerblock.styled";
import Search from "./centerblock_components/Search";
import Filter from "./centerblock_components/Filter";
import Content from "./centerblock_components/Content";

function Centerblock() {
  return (
    <StyledCenterBlock>
      <Search />
      <CenterblockHeading>Треки</CenterblockHeading>
      <Filter />
      <Content />
    </StyledCenterBlock>
  );
}

export default Centerblock;
