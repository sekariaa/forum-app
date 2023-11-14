import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navigation ({ authUser, signOut }) {
  return (
    <div className='navigation'>
      <Link className='logo' to='/'>
        Forum Apps
      </Link>
      <div className='user-info'>
        <img src={authUser.avatar} alt='Avatar user' />
        <button className='sign-out-button' type='button' onClick={signOut}>
          Sign out
        </button>
      </div>
    </div>
  )
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
}

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired
}

export default Navigation
