import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const CommentContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const TimestampContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const UserContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin-bottom: 20px;
`

export const ÌnputLabel = styled.label`
  margin: 0 5px;
`

export const UserInput = styled.input.attrs({
  type: 'text',
  name: 'username'
})`
  width: 100%;
  margin: 5px;
  box-sizing: border-box;
`

export const CommentInput = styled.textarea.attrs({
  name: 'comment'
})`
  resize: none;
  width: 100%;
  height: 70px;
  margin: 5px;
  box-sizing: border-box;
`

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  width: 100px;
  margin: 5px;
`

export const Error = styled.div`
  width: 100%;
  margin: 10px 0;
  color: red;
`
