import { StyledMain } from "./main_components/Main.styled";
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
