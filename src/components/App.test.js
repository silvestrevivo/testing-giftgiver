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
    const id = 1

    beforeEach(() => {
      app.setState({ gifts: [] })
      app.find('.btn-add').simulate('click')
      app.update()
      // beforeEach means what is going to occur before eacht it()
    })

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }])
    })

    it('adds a new gift to render list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1)
    })

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true)
    })

    // testing when we remove a gift
    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id)
      })

      it('removes the gift from the `state`', () => {
        expect(app.state().gifts).toEqual([])
      })
    })
  })
})
