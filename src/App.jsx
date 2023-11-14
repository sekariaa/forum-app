import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { asyncPreloadProcess } from './states/isPreload/action.js'
import { asyncUnsetAuthUser } from './states/authUser/action.js'

import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import AddThreadPage from './pages/AddThreadPage.jsx'
import LeaderboardsPage from './pages/LeaderboardPage.jsx'
import Loading from './components/Loading'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App () {
  const authUser = useSelector((state) => state.authUser)
  const isPreload = useSelector((state) => state.isPreload)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])
  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser())
  }
  if (isPreload) {
    return null
  }
  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path='/*' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </>
    )
  }
  return (
    <>
      <Loading />
      <div className='app-container'>
        <Navigation authUser={authUser} signOut={onSignOut} />
        <Footer />
        <Routes>
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<AddThreadPage />} />
          <Route path='/leaderboards' element={<LeaderboardsPage />} />
          <Route path='/thread/:threadId' element={<DetailPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
