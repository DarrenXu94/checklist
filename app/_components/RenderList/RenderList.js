import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'

import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";

export default class RenderList extends Component {
    state = {
        selectedItem: null
    }

    selectListItem = (e) => {
        // e.preventDefault()
        console.log(e.target.id)
        this.setState({selectedItem: e.target.id})
    }

    deselectOnSubmit = () => {
        this.setState({selectedItem: null})
    }

    renderList = () => {
        let { localList } = this.props
        return (localList.length == 0)
            ? "Loading"
            : localList.map((val) => {
                return <ListItem key={val.task} data={val} selected={this.state.selectedItem == val.id} 
                handleSubmit = {this.props.handleSubmit}
                deselectOnSubmit = {this.deselectOnSubmit}
                />

            })
    }

    clearSelection = () => {
        this.setState({selectedItem: null})

    }

    render() {
        return (
            <OutsideAlerter parentOutsideFunction={this.clearSelection}>
                <div onClick={this.selectListItem}>
                    {this.renderList()}
                </div>
            </OutsideAlerter>

        )
    }
}
