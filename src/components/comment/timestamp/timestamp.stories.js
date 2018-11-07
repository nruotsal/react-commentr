import React from 'react'

import { storiesOf } from '@storybook/react'

import Timestamp from './timestamp'

storiesOf('Timestamp', module)
  .add('with default props', () => <Timestamp />)
  .add('with timestamp and en-GB locale', () => <Timestamp timestamp={new Date('1999-01-01T01:01:01')} locale='en-GB' />)
