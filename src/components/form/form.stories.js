import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Form from './form'

const onSubmit = action('onSubmit')

storiesOf('Form', module)
  .add('with default props', () => <Form onSubmit={onSubmit} />)
  .add('with loading', () => <Form onSubmit={onSubmit} loading />)
  .add('with error', () => <Form onSubmit={onSubmit} error='This is error!' />)
