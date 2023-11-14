import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import { userShape } from './ThreadItem'
import VoteButton from './VoteButton'
import { postedAt } from '../utils/index'

function ThreadDetail ({ id, title, body, owner, category, createdAt, upVotesBy, downVotesBy, upVoteThreadDetail, downVoteThreadDetail, neturalizeVoteThreadDetail, authUser }) {
  return (
    <>
      <section className='thread-detail'>
        <div className='thread-detail__header'>
          <p className='thread-detail__category'>#{category}</p>
          <p className='thread-item__title'>{title}</p>
        </div>
        <article>
          <p className='thread-detail__text'>{parse(body)}</p>
        </article>
        <footer className='thread-detail__items'>
          <VoteButton id={id} authUser={authUser} upVote={upVoteThreadDetail} downVote={downVoteThreadDetail} neturalizeVote={neturalizeVoteThreadDetail} upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
          <p className='thread-detail__created-at'>{postedAt(createdAt)}</p>
          <div className='thread-detail__made-by'>
            Made by <img src={owner.avatar} /> {owner.name}
          </div>
        </footer>
      </section>
    </>
  )
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired
}

export default ThreadDetail
