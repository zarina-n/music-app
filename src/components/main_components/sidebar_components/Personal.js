import { StyledPersonal } from "../../../styles/Sidebar.styled";
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

const Name = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`;

const Avatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`;
