import PropTypes from 'prop-types'
import React from 'react'
import {CommentContainer} from '../../styles'
import Timestamp from './timestamp/timestamp'

const Comment = (props) => {
  const {message, timestamp, locale} = props
  const dateTime = new Date(timestamp)
  return (
    <CommentContainer>
      <Timestamp timestamp={dateTime} locale={locale} />
      {message}
    </CommentContainer>
  )
}

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
}

export default Comment
