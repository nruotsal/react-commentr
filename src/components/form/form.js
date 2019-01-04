import React from 'react'
import PropTypes from 'prop-types'
import {
  FormContainer,
  ÌnputLabel,
  UserInput,
  CommentInput,
  SubmitButton
} from '../../styles'

const Form = props => {
  return (
    <FormContainer>
      <form onSubmit={props.addComment}>
        <ÌnputLabel htmlFor='username'>Username:</ÌnputLabel>
        <UserInput placeholder='Username' />
        <ÌnputLabel htmlFor='comment'>Comment:</ÌnputLabel>
        <CommentInput placeholder='Comment' required />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </FormContainer>
  )
}

Form.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default Form
