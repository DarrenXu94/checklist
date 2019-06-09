import React, { Component } from 'react'

export default class ListItem extends Component {

    renderSelected = () => {
        return (this.props.selected)
        ? "Selected"
        : null

    }
    
    render() {
        return (
            <div id={this.props.data}>
                {this.props.data}
                {this.renderSelected()}
            </div>
        )
    }
}
