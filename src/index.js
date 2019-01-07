import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Form from './components/form/form'
import Comment from './components/comment/comment'

import { Container } from './styles'

const ADD_COMMENT_INIT = 'ADD_COMMENT_INIT'
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT_INIT:
      return {
        ...state,
        loading: true,
        error: undefined
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        comments: [...state.comments, action.comment]
      }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

const Commentr = props => {
  const { comments, locale, addComment } = props
  const [state, dispatch] = useReducer(reducer, { comments, loading: false, error: undefined })

  const onFormSubmit = event => {
    event.preventDefault()
    const { username, comment } = event.target
    dispatch({ type: ADD_COMMENT_INIT })
    addComment(username.value, comment.value)
      .then(comment => dispatch({ type: ADD_COMMENT_SUCCESS, comment }))
      .catch(error => dispatch({ type: ADD_COMMENT_FAILURE, error }))
  }

  return (
    <Container>
      <Form onSubmit={onFormSubmit} loading={state.loading} error={state.error} />
      {state.comments.map((comment, index) =>
        <Comment key={index} {...comment} locale={locale} />
      )}
    </Container>
  )
}

Commentr.propTypes = {
  locale: PropTypes.string,
  comments: PropTypes.array,
  addComment: PropTypes.func.isRequired
}

Commentr.defaultProps = {
  locale: 'en-US',
  comments: []
}

export default Commentr
