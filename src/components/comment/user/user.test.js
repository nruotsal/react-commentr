import React from 'react'
import Enzyme, {render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import User from './user'

Enzyme.configure({adapter: new Adapter()})

describe('User component', () => {
  it('should render itself with default props', () => {
    const user = render(<User />)

    expect(user).toBeDefined()
  })

  it('should render itself with username', () => {
    const props = { username: 'Alice' }
    const user = render(<User {...props} />)

    expect(user).toBeDefined()
    expect(user.text()).toContain('Alice')
  })
})
