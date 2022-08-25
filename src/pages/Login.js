import LoginForm from "../components/enter_components/LoginForm";
import {
  StyledWrapper,
  EnterContainer,
  ModalBlock,
} from "../components/enter_components/EnterForm.styled";
function Login({ user, onButtonClick }) {
  return (
    <StyledWrapper>
      <EnterContainer>
        <ModalBlock>
          <LoginForm user={user} onButtonClick={onButtonClick} />
        </ModalBlock>
      </EnterContainer>
    </StyledWrapper>
  );
}

export default Login;
