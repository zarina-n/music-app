import {
  ModalForm,
  ModalLogo,
  ModalButton,
  ModalLink,
  GoTo
} from './EnterForm.styled'

import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../features/auth/authSlice'
import { useSignUserUpMutation } from '../../features/auth/authApiSlice'
import Login from '../../pages/Login'

import { useTranslation } from 'react-i18next'

function SignUpForm() {
  const { t } = useTranslation(["auth"])
  const userRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const [signUserUp] = useSignUserUpMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  const handleEmail = (event) => setEmail(event.target.value)
  const handleLogin = (event) => setUserName(event.target.value)
  const handlePassword = (event) => setPassword(event.target.value)
  const handleRepeatPassword = (event) => setRepeatPassword(event.target.value)

  const isValid = password === repeatPassword
  let wrongPasswordError

  if (isValid) {
    wrongPasswordError = ''
  } else {
    wrongPasswordError = t("wrongPassword")
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isValid) {
      try {
        const userData = await signUserUp({
          email,
          password,
          username,
        }).unwrap()

        dispatch(signUp({ ...userData }))

        setEmail('')
        setUserName('')
        setPassword('')
        setRepeatPassword('')
        setErrMsg('')
        navigate('/login')
      } catch (err) {
        setErrMsg(err)
      }
    } else {
      event.currentTarget.disabled = true
    }
  }

  const handleLoginButton = (event) => {
    event.preventDefault()
    navigate('/login')
  }

  return (
    <ModalForm>
      <ModalLogo>
        <img src="img/logo.png" alt="logo" />
      </ModalLogo>
      <input
        ref={userRef}
        onChange={handleLogin}
        type="text"
        name="login"
        id="formlogin"
        placeholder={t("userName")}
        required
      ></input>

      {errMsg && <p>{errMsg.data.username}</p>}

      <input
        onChange={handleEmail}
        type="text"
        name="username"
        id="formemail"
        placeholder={t("email")}
        required
      ></input>
      {errMsg && <p>{errMsg.data.email}</p>}

      <input
        onChange={handlePassword}
        type="password"
        name="password"
        id="formpassword"
        placeholder={t("password")}
        required
        autoComplete="off"
      ></input>
      {errMsg && <p>{errMsg.data.password}</p>}

      <input
        onChange={handleRepeatPassword}
        type="password"
        name="password"
        id="formrepeatpassword"
        placeholder={t("passwordRepeat")}
        required
        autoComplete="off"
      ></input>

      <p>{wrongPasswordError}</p>

      <ModalButton padding={'30px'} onClick={handleSubmit}>
        <ModalLink color="#FFFFFF" backgroundcolor="#271A58" to={'#'}>
        {t("signUp")}
        </ModalLink>
      </ModalButton>

      <GoTo onClick={handleLoginButton}>
        <ModalLink color="#000000" backgroundcolor="#D9D9D9" to={'/login'}>
        {t("login")}
        </ModalLink>
      </GoTo>
    </ModalForm>
  )
}

export default SignUpForm
