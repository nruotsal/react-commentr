import React from 'react'
import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Timestamp from './timestamp'

Enzyme.configure({ adapter: new Adapter() })

describe('Timestamp component', () => {
  it('should render itself with default props', () => {
    const timestamp = render(<Timestamp />)

    expect(timestamp).toBeDefined()
  })

  it('should render itself with given props', () => {
    const props = { timestamp: new Date('2018-02-03T01:01:01'), locale: 'en-GB' }
    const timestamp = render(<Timestamp {...props} />)

    expect(timestamp).toBeDefined()
    expect(timestamp.text()).toContain('2/3/2018, 1:01:01 AM')
  })
})
