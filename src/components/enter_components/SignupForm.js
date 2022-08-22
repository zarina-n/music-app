import {
  ModalForm,
  ModalLogo,
  ModalButton,
  ModalLink,
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

      <input
        type="password"
        name="password"
        id="formpassword"
        placeholder="Повторите пароль"
      ></input>
      <ModalButton margintop="30px">
        <ModalLink color="#FFFFFF" backgroundcolor="#271A58" to={"/"}>
          Зарегистрироваться
        </ModalLink>
      </ModalButton>
    </ModalForm>
  );
}

export default LoginForm;
