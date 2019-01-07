import React from 'react'
import PropTypes from 'prop-types'
import {
  FormContainer,
  ÌnputLabel,
  UserInput,
  CommentInput,
  SubmitButton,
  Error
} from '../../styles'

const Form = props => {
  return (
    <FormContainer>
      <form onSubmit={props.onSubmit}>
        <ÌnputLabel htmlFor='username'>Username:</ÌnputLabel>
        <UserInput placeholder='Username' />
        <ÌnputLabel htmlFor='comment'>Comment:</ÌnputLabel>
        <CommentInput placeholder='Comment' required />
        {props.error && <Error>{props.error}</Error>}
        <SubmitButton disabled={props.loading}>Submit</SubmitButton>
      </form>
    </FormContainer>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool
}

Form.defaultProps = {
  error: undefined,
  loading: false
}

export default Form
