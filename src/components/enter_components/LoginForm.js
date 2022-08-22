import {
  ModalForm,
  ModalLogo,
  ModalButton,
  ModalLink,
  SignupButton,
} from "./EnterForm.styled";

function LoginForm({ user, onButtonClick }) {
  return (
    <ModalForm>
      <ModalLogo>
        <img src="img/logo_modal.png" alt="logo" />
      </ModalLogo>
      <input
        type="text"
        name="login"
        id="formlogin"
        placeholder="Логин"
      ></input>

      <input
        type="password"
        name="password"
        id="formpassword"
        placeholder="Пароль"
      ></input>
      <ModalButton margintop="60px" onClick={onButtonClick}>
        <ModalLink color="#FFFFFF" backgroundcolor="#271A58" to={"/"}>
          {user ? "Войти" : "No user"}
        </ModalLink>
      </ModalButton>
      <SignupButton>
        <ModalLink color="#000000" backgroundcolor="#D9D9D9" to={"/signup"}>
          Зарегистрироваться
        </ModalLink>
      </SignupButton>
    </ModalForm>
  );
}

export default LoginForm;
