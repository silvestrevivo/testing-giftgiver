import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Gift from './gift'
import { maxNumber } from '../Helper/index'

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state

    gifts.push({ id: maxNumber(gifts.map(gift => gift.id)) + 1 })

    this.setState({ gifts })
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)

    this.setState({ gifts })
  };

  render () {
    return (
      <div className="container text-center">
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift}>
                {}
              </Gift>
            )
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Click
        </Button>
      </div>
    )
  }
}

export default App
