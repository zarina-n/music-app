import {
  ModalForm,
  ModalLogo,
  ModalButton,
  ModalLink,
  GoTo,
} from './EnterForm.styled'

import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  setUser,
  setAccessToken,
  setRefreshToken,
} from '../../features/auth/authSlice'
import {
  useGetUserMutation,
  useGetTokenMutation,
} from '../../features/auth/authApiSlice'

import { useTranslation } from 'react-i18next'

function LoginForm() {
  const { t } = useTranslation(['auth'])

  const userRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [getUser, { isLoading: isUserLoading }] = useGetUserMutation()
  const [getToken, { isLoading: isTokenLoading }] = useGetTokenMutation()

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
      dispatch(setAccessToken(userToken.access))
      dispatch(setRefreshToken(userToken.refresh))

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
        placeholder={t('email')}
        value={email}
        required
      ></input>

      {errMsg && <p>{errMsg.data?.email}</p>}

      <input
        onChange={handlePassword}
        type="password"
        name="password"
        id="formpassword"
        placeholder={t('password')}
        value={password}
        required
        autoComplete="off"
      ></input>

      {errMsg && <p>{errMsg.data?.password}</p>}
      {errMsg && <p>{errMsg.data?.non_field_errors}</p>}

      <ModalButton onClick={handleSubmit}>
        <ModalLink color="#FFFFFF" backgroundcolor="#271A58" to={'#'}>
          {isUserLoading || isTokenLoading ? t('loading') : t('login')}
        </ModalLink>
      </ModalButton>

      <GoTo onClick={handleSignUpButton}>
        <ModalLink color="#000000" backgroundcolor="#D9D9D9" to={'/signup'}>
          {t('signUp')}
        </ModalLink>
      </GoTo>
    </ModalForm>
  )
}

export default LoginForm
