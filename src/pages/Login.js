import LoginForm from "../components/enter_components/LoginForm";
import {
  StyledWrapper,
  EnterContainer,
  ModalBlock,
} from "../components/enter_components/EnterForm.styled";
function Login() {
  return (
    <StyledWrapper>
      <EnterContainer>
        <ModalBlock>
          <LoginForm />
        </ModalBlock>
      </EnterContainer>
    </StyledWrapper>
  );
}

export default Login;
