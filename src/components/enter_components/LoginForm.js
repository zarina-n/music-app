import {
  ModalForm,
  ModalLogo,
  ModalButton,
  ModalLink,
  Button,
  ErrorMsg,
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
import i18next from 'i18next'

function LoginForm() {
  const { i18n, t } = useTranslation(['auth', 'home'])

  const userRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [errEmailMsg, setErrEmailMsg] = useState('')
  const [errPasswordMsg, setErrPasswordMsg] = useState('')

  const [getUser, { isLoading: isUserLoading }] = useGetUserMutation()
  const [getToken, { isLoading: isTokenLoading }] = useGetTokenMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en')
    }
  }, [])

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
  }

  const handleLogin = (event) => {
    setEmail(event.target.value)
    setErrEmailMsg('')
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
    setErrPasswordMsg('')
  }

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

  useEffect(() => {
    if (errMsg?.data?.email?.[0] === 'Это поле не может быть пустым.') {
      setErrEmailMsg(t('emptyField'))
    }

    if (errMsg?.data?.password?.[0] === 'Это поле не может быть пустым.') {
      setErrPasswordMsg(t('emptyField'))
    }

    if (
      errMsg?.data?.detail ===
      'Пользователь с таким email или паролем не найден'
    ) {
      setErrPasswordMsg(t('userError'))
    }
  }, [errMsg, t])

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

      {errEmailMsg && <ErrorMsg>{errEmailMsg}</ErrorMsg>}

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

      {errPasswordMsg && <ErrorMsg>{errPasswordMsg}</ErrorMsg>}

      <ModalButton onClick={handleSubmit}>
        <ModalLink color="#FFFFFF" backgroundcolor="#271A58" to={'#'}>
          {isUserLoading || isTokenLoading ? t('loading') : t('login')}
        </ModalLink>
      </ModalButton>

      <Button onClick={handleSignUpButton}>
        <ModalLink color="#000000" backgroundcolor="#D9D9D9" to={'/signup'}>
          {t('signUp')}
        </ModalLink>
      </Button>

      {localStorage.getItem('i18nextLng') === 'en' ? (
        <Button
          onClick={(event) => {
            handleLanguageChange('ru')
            event.preventDefault()
          }}
        >
          {t('home:lng')}
        </Button>
      ) : (
        <Button
          onClick={(event) => {
            handleLanguageChange('en')
            event.preventDefault()
          }}
        >
          {t('home:lng')}
        </Button>
      )}
    </ModalForm>
  )
}

export default LoginForm
