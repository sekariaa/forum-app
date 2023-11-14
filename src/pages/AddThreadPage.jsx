import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncCreateThread } from '../states/threads/action'
import ThreadInput from '../components/ThreadInput'

export default function AddThreadPage () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }))
    navigate('/')
  }
  return (
    <div className='thread-page__add'>
      <h1 className='thread-page__title'>New Thread</h1>
      <ThreadInput addThread={onAddThread} />
    </div>
  )
}
