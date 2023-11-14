import React from 'react'
import PropTypes from 'prop-types'
import ThreadItem, { threadItemShape } from './ThreadItem'

function ThreadList ({ threads, upVote, downVote, neturalizeVote }) {
  return (
    <>
      <h1 className='thread-list__header'>Discussion is Available</h1>
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} upVote={upVote} downVote={downVote} neturalizeVote={neturalizeVote} />
      ))}
    </>
  )
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired
}

export default ThreadList
