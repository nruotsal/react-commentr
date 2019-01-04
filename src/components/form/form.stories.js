import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Form from './form'

storiesOf('Form', module)
  .add('with default props', () => <Form addComment={action('addComment')} />)
