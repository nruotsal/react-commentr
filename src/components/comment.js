import PropTypes from 'prop-types'
import React from 'react'
import {CommentContainer} from '../styles'

const Comment = (props) => {
  const {message} = props
  return (
    <CommentContainer>
      {message}
    </CommentContainer>
  )
}

Comment.propTypes = {
  message: PropTypes.string
}

Comment.defaultProps = {
  message: ''
}

export default Comment
