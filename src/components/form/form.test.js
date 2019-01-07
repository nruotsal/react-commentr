import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Form from './form'
import { Error, SubmitButton } from '../../styles'

Enzyme.configure({ adapter: new Adapter() })

describe('Form component', () => {
  it('should render itself', () => {
    const mockOnSubmit = jest.fn()
    const form = shallow(<Form onSubmit={mockOnSubmit} />)

    expect(form).toBeDefined()
  })

  it('should call onSubmit prop on form submit', () => {
    const mockOnSubmit = jest.fn()
    const form = shallow(<Form onSubmit={mockOnSubmit} />)
    form.find('form').simulate('submit')

    expect(mockOnSubmit.mock.calls.length).toBe(1)
  })

  it('should disable submit button when loading', () => {
    const mockOnSubmit = jest.fn()
    const form = shallow(<Form onSubmit={mockOnSubmit} loading />)

    expect(form.find(SubmitButton).prop('disabled')).toBe(true)
  })

  it('should show error', () => {
    const mockOnSubmit = jest.fn()
    const error = 'test error'
    const form = shallow(<Form onSubmit={mockOnSubmit} error={error} />)

    expect(form.find(Error).text()).toBe(error)
  })
})
