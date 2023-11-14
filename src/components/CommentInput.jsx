import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function CommentInput ({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('')
  const onCommentSubmit = () => {
    addComment(comment)
    setComment('')
  }
  return (
    <div className='comment-input'>
      <h3 className='comment-input__title'>Reply here</h3>
      <textarea type='text' placeholder='Write your comment' value={comment} onChange={onCommentChange} />
      <button onClick={onCommentSubmit}>Send</button>
    </div>
  )
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default CommentInput
