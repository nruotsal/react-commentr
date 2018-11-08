import React from 'react'
import Enzyme, {render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Form from './form'

Enzyme.configure({adapter: new Adapter()})

describe('Form component', () => {
  it('should render itself', () => {
    const form = render(<Form />)

    expect(form).toBeDefined()
  })
})
