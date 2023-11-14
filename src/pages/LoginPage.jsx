import React from 'react'
import { Link } from 'react-router-dom'
import LoginInput from '../components/LoginInput'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'

function LoginPage () {
  const dispatch = useDispatch()

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
  }

  return (
    <section className='login-page'>
      <header className='login-page__hero'>
        <h1>Login</h1>
      </header>
      <article className='login-page__main'>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account? <Link to='/register'>Register</Link>
        </p>
      </article>
    </section>
  )
}

export default LoginPage
