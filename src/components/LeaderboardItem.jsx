import React from 'react'
import PropTypes from 'prop-types'
import { userShape } from './ThreadItem'

function LeaderBoardItem ({ user, score }) {
  return (
    <table className='leaderboard-item'>
      <tr>
        <td className='leaderboard-item__user'>
          <img className='leaderboard-item__avatar' src={user.avatar} /> {user.name}
        </td>
      </tr>
      <p className='leaderboard-item__score'>{score}</p>
    </table>
  )
}

LeaderBoardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired
}

export default LeaderBoardItem
