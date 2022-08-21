import { StyledPersonal, Name, Avatar } from "./Sidebar.styled";
import styled from "styled-components";

function Personal() {
  return (
    <StyledPersonal>
      <Name>Sergey.Ivanov</Name>
      <Avatar />
    </StyledPersonal>
  );
}

export default Personal;
