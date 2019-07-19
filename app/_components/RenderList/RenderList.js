import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'

import { ModeContext } from '../../_stores/ModeContext'

import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";

export default class RenderList extends Component {
    state = {
        selectedItem: null,
        highlightedArray: []
    }

    selectListItem = (e, state) => {
        // e.preventDefault()
        console.log(e.target.id)
        if (state.modeData == "edit") {
            this.setState({ selectedItem: e.target.id })
        } else {
            console.log("Check off", e.target.id)
            let newHighlightArray = this.state.highlightedArray
            newHighlightArray.push(e.target.id)
            this.setState({ highlightedArray: newHighlightArray })
        }
    }

    deselectOnSubmit = () => {
        this.setState({ selectedItem: null })
    }

    renderList = () => {
        let { localList } = this.props
        return (localList.length == 0)
            ? "Loading"
            : localList.map((val) => {
                return <ListItem key={val.task} data={val} selected={this.state.selectedItem == val._id}
                    handleSubmit={this.props.handleSubmit}
                    handleDelete={this.props.handleDelete}
                    deselectOnSubmit={this.deselectOnSubmit}
                    highlightedArray={this.state.highlightedArray.includes(val._id)}
                />

            })
    }

    clearSelection = () => {
        this.setState({ selectedItem: null })

    }

    render() {
        return (
            <ModeContext.Consumer>
                {state =>
                    <OutsideAlerter parentOutsideFunction={this.clearSelection}>
                        <div onClick={(e) => this.selectListItem(e, state)}>
                            {this.renderList()}
                        </div>
                    </OutsideAlerter>
                }
            </ModeContext.Consumer>

        )
    }
}
