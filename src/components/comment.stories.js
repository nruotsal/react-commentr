import React from 'react'

import { storiesOf } from '@storybook/react'

import Comment from './comment'

const props = {
  message: 'This is a comment'
}

storiesOf('Comment', module)
  .add('with message', () => <Comment {...props} />)
