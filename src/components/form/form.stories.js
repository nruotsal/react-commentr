import React from 'react'

import { storiesOf } from '@storybook/react'

import Form from './form'

storiesOf('Form', module)
  .add('with default props', () => <Form />)