import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { BsReply } from 'react-icons/bs'
import { postedAt } from '../utils'
import VoteButton from './VoteButton'
import parse from 'html-react-parser'

function ThreadItem ({ id, title, body, category, createdAt, threadOwner, upVote, downVote, neturalizeVote, upVotesBy, downVotesBy, totalComments, authUser }) {
  const navigate = useNavigate()

  const onThreadClick = () => {
    navigate(`/thread/${id}`)
  }

  return (
    <div className='thread-item'>
      <div className='thread-item__detail'>
        <header>
          <div className='thread-item__header'>
            <p className='thread-item__category'>#{category}</p>
            <p role='button' className='thread-item__title' onClick={onThreadClick}>
              {title}
            </p>
          </div>
        </header>
        <article>
          <p className='thread-item__body'>{parse(body)}</p>
        </article>

        <div className='thread-item__components'>
          <div role='button'>
            <VoteButton className='talk-item__vote-button' id={id} authUser={authUser} upVote={upVote} downVote={downVote} neturalizeVote={neturalizeVote} upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
          </div>
          <button className='talk-item__reply-button'>
            <BsReply />
          </button>
          <span>
            <p className='thread-item__total-comments'>{totalComments}</p>
          </span>
          <span>
            <p className='thread-item__created-at'>{postedAt(createdAt)}</p>
          </span>
          <span>
            <p className='thread-item__made-by'>Made by {threadOwner.name}</p>
          </span>
        </div>
      </div>
    </div>
  )
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired
}

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired
}

export default ThreadItem
export { threadItemShape, userShape }
