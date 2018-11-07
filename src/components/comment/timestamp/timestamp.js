import PropTypes from 'prop-types'
import React from 'react'
import {TimestampContainer} from '../../../styles'

const Timestamp = (props) => {
  const {timestamp, locale} = props
  return (
    <TimestampContainer>
      {timestamp.toLocaleString(locale)}
    </TimestampContainer>
  )
}

Timestamp.propTypes = {
  locale: PropTypes.string,
  timestamp: PropTypes.instanceOf(Date)
}

Timestamp.defaultProps = {
  locale: 'en-US',
  timestamp: new Date()
}

export default Timestamp
