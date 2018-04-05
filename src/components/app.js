import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './gift'

class App extends Component {
  state = {
    gifts: []
  }

  addGift = () => {
    const { gifts } = this.state

    const ids = gifts.map(gift => gift.id)

    const maxId = ids.length > 0 ? Math.max(...ids) : 0

    gifts.push({ id: maxId + 1 })

    this.setState({ gifts })
  }

  render () {
    return (
      <div className="container text-center">
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map((gift, i) => {
              return (
                <Gift key={i}>{}</Gift>
              )
            })
          }
        </div>
        <Button
          className="btn-add"
          onClick={this.addGift}>Click</Button>
      </div>
    )
  }
}

export default App
