import React from 'react'
import { VscCommentDiscussion } from 'react-icons/vsc'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <nav>
      <div className='navigation-item'>
        <Link to='/'>
          <div className='navigation-item__icon'>
            <VscCommentDiscussion />
          </div>
          <p className='navigation-item__label'>Threads</p>
        </Link>
      </div>
      <div className='navigation-item'>
        <Link to='/leaderboards'>
          <div className='navigation-item__icon'>
            <MdOutlineLeaderboard />
          </div>
          <p className='navigation-item__label'>Leaderboards</p>
        </Link>
      </div>
    </nav>
  )
}

export default Footer
