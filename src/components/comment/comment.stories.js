import React from 'react'

import { storiesOf } from '@storybook/react'

import Comment from './comment'

const props = {
  locale: 'en-US',
  timestamp: '2018-01-01T01:01:01',
  message: 'This is a comment'
}

storiesOf('Comment', module)
  .add('with message', () => <Comment {...props} />)
