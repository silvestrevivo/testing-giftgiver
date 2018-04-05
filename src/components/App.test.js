import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

describe('App', () => {
  const app = shallow(<App />)

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('initializes the `state` with empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking `add-gift button`', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click')
      // beforeEach means what is going to occur before eacht it()
    })

    // if you want to reset them before each test:
    afterEach(() => {
      app.setState({ gifts: [] })
    }) // so become reset eacht it() and you can test them separetly
    // other

    it('adds a new gift to `state`', () => {
      // console.log(app.debug())
      expect(app.state().gifts).toEqual([{ id: 1 }])
    })

    it('adds a new gift to render list', () => {
      // console.log(app.debug())
      expect(app.find('.gift-list').children().length).toEqual(1)
    })

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true)
    })
  })
})
