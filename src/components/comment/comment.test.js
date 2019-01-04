import React from 'react'
import Enzyme, { render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Comment from './comment'

Enzyme.configure({ adapter: new Adapter() })

describe('Comment component', () => {
  it('should render itself', () => {
    const props = { message: 'This is a comment message', timestamp: '2018-01-01T01:01:01', locale: 'en-US', username: 'Alice' }
    const comment = render(<Comment {...props} />)

    expect(comment).toBeDefined()
    expect(comment.text()).toContain(props.message)
  })
})
