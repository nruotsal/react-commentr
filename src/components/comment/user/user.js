import PropTypes from 'prop-types'
import React from 'react'
import {UserContainer} from '../../../styles'

const User = (props) => {
  const {username} = props
  return (
    <UserContainer>
      {username}
    </UserContainer>
  )
}

User.propTypes = {
  username: PropTypes.string
}

User.defaultProps = {
  username: 'Anonymous'
}

export default User
