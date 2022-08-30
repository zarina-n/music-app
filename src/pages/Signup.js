import SignupForm from "../components/enter_components/SignupForm";
import {
  StyledWrapper,
  EnterContainer,
  ModalBlock,
} from "../components/enter_components/EnterForm.styled";

function Signup() {
  return (
    <StyledWrapper>
      <EnterContainer>
        <ModalBlock>
          <SignupForm />
        </ModalBlock>
      </EnterContainer>
    </StyledWrapper>
  );
}

export default Signup;
