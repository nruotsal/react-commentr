import React from 'react'
import PropTypes from 'prop-types'
import Comment from './components/comment'

import {Container} from './styles'

const Commentr = props => (
  <Container>
    {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </Container>
)

Commentr.propTypes = {
  comments: PropTypes.array
}

Commentr.defaultProps = {
  comments: []
}

export default Commentr
