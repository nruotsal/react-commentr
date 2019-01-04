import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Form from './components/form/form'
import Comment from './components/comment/comment'

import { Container } from './styles'

const reducer = (state, action) => {
  switch (action.type) {
    case 'addComment':
      return { ...state, comments: [...state.comments, action.comment] }
    default:
      return state
  }
}

const Commentr = props => {
  const { comments, locale } = props
  const [state, dispatch] = useReducer(reducer, { comments })

  const addComment = event => {
    event.preventDefault()
    const comment = {
      timestamp: (new Date()).toJSON(),
      username: event.target.username.value,
      message: event.target.comment.value
    }

    dispatch({ type: 'addComment', comment })
  }

  return (
    <Container>
      <Form addComment={addComment} />
      {state.comments.map((comment, index) =>
        <Comment key={index} {...comment} locale={locale} />
      )}
    </Container>
  )
}

Commentr.propTypes = {
  locale: PropTypes.string,
  comments: PropTypes.array
}

Commentr.defaultProps = {
  locale: 'en-US',
  comments: []
}

export default Commentr
