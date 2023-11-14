import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateLeaderboards } from '../states/leaderboards/action'
import LeaderBoardItem from '../components/LeaderboardItem'

function LeaderboardsPage () {
  const dispatch = useDispatch()
  const { leaderboards = [] } = useSelector((states) => states)

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards())
  }, [dispatch])

  return (
    <div className='leaderboard-page'>
      <header className='leaderboard-page__header'>
        <h4 className='leaderboard-page__title'>Leaderboard</h4>
        <h5 className='leaderboard-page__subtitle'>10 active users</h5>
      </header>
      <div className='leaderboard-page__table'>
        <h5 className='leaderboard-page__header-user'>User</h5>
        <h5 className='leaderboard-page__header-score'>Score</h5>
      </div>
      {leaderboards.map(({ user, score }) => (
        <LeaderBoardItem key={user.id} user={user} score={score} />
      ))}
    </div>
  )
}

export default LeaderboardsPage
