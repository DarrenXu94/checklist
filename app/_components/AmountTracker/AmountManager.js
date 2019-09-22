import React, { Component } from 'react'
import AmountTracker from './AmountTracker'
import { PriceQuery } from '../../_actions/PriceQuery'

export default class AmountManager extends Component {
    state = {
        amount: ''
    }
    async componentDidMount() {
        let price = await PriceQuery('GET')
        this.setState({ amount: price.data.price })
    }

    handleChange = (event) => {
        this.setState({ amount: event.target.value });
    }

    setPrice = async (e) => {
        e.preventDefault()
        let price = await PriceQuery('PUT', { price: this.state.amount })
        console.log(price)
    }

    render() {
        return (
            <div>
                <AmountTracker amount={this.state.amount} setPrice={this.setPrice} handleChange={this.handleChange} />
            </div>
        )
    }
}
