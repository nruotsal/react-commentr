import React from 'react'

import { storiesOf } from '@storybook/react'

import User from './user'

storiesOf('User', module)
  .add('with default props', () => <User />)
  .add('with username', () => <User username='Alice' />)
