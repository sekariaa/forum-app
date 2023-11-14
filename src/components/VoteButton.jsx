import React from 'react'
import PropTypes from 'prop-types'
import { FaRegThumbsUp, FaThumbsUp, FaRegThumbsDown, FaThumbsDown } from 'react-icons/fa'

function VoteButton ({ id, upVote, downVote, neturalizeVote, upVotesBy, downVotesBy, authUser }) {
  const isUpVoted = upVotesBy.includes(authUser)
  const isDownVoted = downVotesBy.includes(authUser)

  const onUpVoteClick = () => {
    upVote(id)
  }

  const onDownVoteClick = () => {
    downVote(id)
  }

  const onNeutralizeVoteClick = () => {
    neturalizeVote(id)
  }

  return (
    <>
      {isUpVoted ? (<button onClick={onNeutralizeVoteClick}><FaThumbsUp /></button>) : (<button><FaRegThumbsUp onClick={onUpVoteClick} /></button>)}
      <span>{upVotesBy.length}</span>
      {isDownVoted ? (<button onClick={onNeutralizeVoteClick}> <FaThumbsDown /></button>) : (<button onClick={onDownVoteClick}><FaRegThumbsDown /></button>)}
      <span>{downVotesBy.length}</span>
    </>
  )
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired
}

export default VoteButton
