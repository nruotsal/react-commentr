import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Form from './form'

Enzyme.configure({ adapter: new Adapter() })

describe('Form component', () => {
  it('should render itself', () => {
    const mockAddComment = jest.fn()
    const form = shallow(<Form addComment={mockAddComment} />)

    expect(form).toBeDefined()
  })

  it('should call add comment on form submit', () => {
    const mockAddComment = jest.fn()
    const form = shallow(<Form addComment={mockAddComment} />)
    form.find('form').simulate('submit')

    expect(mockAddComment.mock.calls.length).toBe(1)
  })
})
