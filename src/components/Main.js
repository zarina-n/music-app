import styled from "styled-components";
import Centerblock from "./main_components/Centerblock";
import Navigation from "./main_components//Navigation";
import Sidebar from "./main_components/Sidebar";

function Main() {
  return (
    <StyledMain>
      <Navigation />
      <Centerblock />
      <Sidebar />
    </StyledMain>
  );
}

export default Main;

const StyledMain = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
