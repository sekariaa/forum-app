import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

export default function ThreadInput ({ addThread }) {
  const [title, onTitleChange] = useInput('')
  const [category, onCategoryChange] = useInput('')
  const [body, onBodyChange] = useInput('')

  return (
    <div className='thread-input'>
      <textarea className='thread-input__input' placeholder='Title' value={title} onChange={onTitleChange} />
      <textarea className='thread-input__input' placeholder='Category' value={category} onChange={onCategoryChange} />
      <textarea className='thread-input__input' placeholder='Write your text' value={body} onChange={onBodyChange} />
      <button className='thread-input__submit' type='submit' onClick={() => addThread({ title, body, category })}>
        Save
      </button>
    </div>
  )
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired
}
