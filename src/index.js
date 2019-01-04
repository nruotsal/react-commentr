import React from 'react'
import PropTypes from 'prop-types'
import Form from './components/form/form'
import Comment from './components/comment/comment'

import { Container } from './styles'

const Commentr = props => (
  <Container>
    <Form />
    {props.comments.map(comment =>
      <Comment key={comment.id} {...comment} locale={props.locale} />
    )}
  </Container>
)

Commentr.propTypes = {
  locale: PropTypes.string,
  comments: PropTypes.array
}

Commentr.defaultProps = {
  locale: 'en-US',
  comments: []
}

export default Commentr
