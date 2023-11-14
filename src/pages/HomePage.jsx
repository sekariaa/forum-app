import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ThreadsList from '../components/ThreadList'
import asyncPopulateUsersAndThreads from '../states/shared/action'
import { asyncUpVoteThread, asyncDownVoteThread, asyncNeturalizeVoteThread } from '../states/threads/action'
import { IoIosAdd } from 'react-icons/io'

function HomePage () {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  const { threads = [], users = [], authUser } = useSelector((states) => states)

  const categories = new Set(threads.map((thread) => thread.category))

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id))
  }

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id))
  }

  const onNeturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id))
  }

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id
  }))

  return (
    <section className='home-page'>
      <div>
        {Array.from(categories).map((category) => {
          if (filter === category) {
            return (
              <button key={category} onClick={() => setFilter('')}>
                {`#${category}`}
              </button>
            )
          }
          return (
            <button key={category} onClick={() => setFilter(category)}>
              {`#${category}`}
            </button>
          )
        })}
      </div>
      <ThreadsList threads={filter ? threadList.filter((thread) => thread.category === filter) : threadList} upVote={onUpVoteThread} downVote={onDownVoteThread} neturalizeVote={onNeturalizeVoteThread} />
      <Link to='/new' className='link-to-new-thread'>
        <IoIosAdd />
      </Link>
    </section>
  )
}

export default HomePage
