import React from 'react'
import PropTypes from 'prop-types'
import { userShape } from './ThreadItem'
import VoteButton from './VoteButton'
import { postedAt } from '../utils'
import parse from 'html-react-parser'

function CommentItem ({ id, content, createdAt, owner, upVotesBy, downVotesBy, upVote, downVote, neturalizeVote, authUser }) {
  return (
    <div className='comment-item'>
      <div className='comment-item__user-photo'>
        <img src={owner.avatar} alt={owner} />
      </div>
      <div className='comment-item__detail'>
        <header>
          <div className='comment-item__user-info'>
            <p className='comment-item__user-name'>{owner.name}</p>
          </div>
          <p className='comment-item__created-at'>{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className='comment-item__text'>{parse(content)}</p>
        </article>
        <div role='button'>
          <VoteButton className='talk-item__vote-button' id={id} authUser={authUser} upVote={upVote} downVote={downVote} neturalizeVote={neturalizeVote} upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
        </div>
      </div>
    </div>
  )
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired
}

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired
}

export default CommentItem
export { commentShape }
