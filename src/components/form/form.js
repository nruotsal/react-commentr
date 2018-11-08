import React from 'react'
import {
  FormContainer,
  ÌnputLabel,
  UserInput,
  CommentInput,
  SubmitButton
} from '../../styles'

const Form = () => {
  return (
    <FormContainer>
      <form>
        <ÌnputLabel htmlFor='username'>Username:</ÌnputLabel>
        <UserInput placeholder='Username'/>
        <ÌnputLabel htmlFor='comment'>Comment:</ÌnputLabel>
        <CommentInput placeholder='Comment' required />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </FormContainer>
  )
}

export default Form
