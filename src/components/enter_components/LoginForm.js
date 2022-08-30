import {
  ModalForm,
  ModalLogo,
  ModalButton,
  ModalLink,
  SignupButton,
} from "./EnterForm.styled";

function LoginForm() {
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

      <ModalButton margintop="60px">
        <ModalLink color="#FFFFFF" backgroundcolor="#271A58" to={"/"}>
          Войти
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
