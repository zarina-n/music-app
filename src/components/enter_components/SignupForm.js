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
import { signUp } from '../../features/auth/authSlice'
import { useSignUserUpMutation } from '../../features/auth/authApiSlice'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function SignUpForm() {
  const { i18n, t } = useTranslation(['auth'])
  const userRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [errEmailMsg, setErrEmailMsg] = useState('')
  const [errPasswordMsg, setErrPasswordMsg] = useState('')
  const [errUserNameMsg, setErrUserNameMsg] = useState('')

  const [signUserUp, { isLoading: isSignUpUserLoading }] =
    useSignUserUpMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  const handleEmail = (event) => {
    setEmail(event.target.value)
    setErrEmailMsg('')
  }

  const handleLogin = (event) => {
    setUserName(event.target.value)
    setErrUserNameMsg('')
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
    setErrPasswordMsg('')
  }
  const handleRepeatPassword = (event) => {
    setRepeatPassword(event.target.value)
    setErrPasswordMsg('')
  }

  const isValid = password === repeatPassword
  let wrongPasswordError

  if (isValid) {
    wrongPasswordError = ''
  } else {
    wrongPasswordError = t('wrongPassword')
  }

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en')
    }
  }, [])

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
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

  useEffect(() => {
    console.log(errMsg)
  }, [errMsg])

  useEffect(() => {
    if (errMsg?.data?.username?.[0] === 'Это поле не может быть пустым.') {
      setErrUserNameMsg(t('emptyField'))
    }

    if (errMsg?.data?.email?.[0] === 'Это поле не может быть пустым.') {
      setErrEmailMsg(t('emptyField'))
    } else if (
      errMsg?.data?.email?.[0] === 'Введите правильный адрес электронной почты.'
    ) {
      setErrEmailMsg(t('incorrectEmail'))
    }

    if (errMsg?.data?.password?.[0] === 'Это поле не может быть пустым.') {
      setErrPasswordMsg(t('emptyField'))
    } else if (
      errMsg?.data?.password?.map(
        (msg) =>
          msg ===
            'Введённый пароль слишком короткий. Он должен содержать как минимум 8 символов.' ||
          msg === 'Введённый пароль слишком широко распространён.' ||
          msg === 'Введённый пароль состоит только из цифр.'
      )
    ) {
      setErrPasswordMsg(t('incorrectPassword'))
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
        placeholder={t('userName')}
        required
      ></input>

      {errUserNameMsg && <ErrorMsg>{errUserNameMsg}</ErrorMsg>}

      <input
        onChange={handleEmail}
        type="text"
        name="username"
        id="formemail"
        placeholder={t('email')}
        required
      ></input>

      {errEmailMsg && <ErrorMsg>{errEmailMsg}</ErrorMsg>}

      <input
        onChange={handlePassword}
        type="password"
        name="password"
        id="formpassword"
        placeholder={t('password')}
        required
        autoComplete="off"
      ></input>

      {errPasswordMsg && <ErrorMsg>{errPasswordMsg}</ErrorMsg>}

      <input
        onChange={handleRepeatPassword}
        type="password"
        name="password"
        id="formrepeatpassword"
        placeholder={t('passwordRepeat')}
        required
        autoComplete="off"
      ></input>

      {wrongPasswordError && <ErrorMsg>{wrongPasswordError}</ErrorMsg>}
      {errPasswordMsg && <ErrorMsg>{errPasswordMsg}</ErrorMsg>}

      <ModalButton padding={'30px'} onClick={handleSubmit}>
        <ModalLink color="#FFFFFF" backgroundcolor="#271A58" to={'#'}>
          {isSignUpUserLoading ? t('loading') : t('signUp')}
        </ModalLink>
      </ModalButton>

      <Button onClick={handleLoginButton}>
        <ModalLink color="#000000" backgroundcolor="#D9D9D9" to={'/login'}>
          {t('login')}
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

export default SignUpForm
