import {
  ModalForm,
  ModalLogo,
  ModalButton,
  ModalLink,
  SignupButton,
} from './EnterForm.styled'

import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser, setToken } from '../../features/auth/authSlice'
import {
  useGetUserMutation,
  useGetTokenMutation,
} from '../../features/auth/authApiSlice'

function LoginForm() {
  const userRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [getUser] = useGetUserMutation()
  const [getToken] = useGetTokenMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  const handleLogin = (event) => setEmail(event.target.value)
  const handlePassword = (event) => setPassword(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const userData = await getUser({ email, password }).unwrap()
      const userToken = await getToken({ email, password }).unwrap()

      dispatch(setUser({ ...userData }))
      dispatch(setToken({ ...userToken }))

      setEmail('')
      setPassword('')
      setErrMsg('')
      navigate('/')
    } catch (err) {
      setErrMsg(err)
    }
  }

  const handleSignUpButton = (event) => {
    event.preventDefault()
    navigate('/signup')
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
        placeholder="Email"
        value={email}
        required
      ></input>

      {errMsg && <p>{errMsg.data?.email}</p>}

      <input
        onChange={handlePassword}
        type="password"
        name="password"
        id="formpassword"
        placeholder="Пароль"
        value={password}
        required
        autoComplete="off"
      ></input>

      {errMsg && <p>{errMsg.data?.password}</p>}
      {errMsg && <p>{errMsg.data?.non_field_errors}</p>}

      <ModalButton onClick={handleSubmit}>
        <ModalLink color="#FFFFFF" backgroundcolor="#271A58" to={'#'}>
          Войти
        </ModalLink>
      </ModalButton>

      <SignupButton onClick={handleSignUpButton}>
        <ModalLink color="#000000" backgroundcolor="#D9D9D9" to={'/signup'}>
          Зарегистрироваться
        </ModalLink>
      </SignupButton>
    </ModalForm>
  )
}

export default LoginForm
