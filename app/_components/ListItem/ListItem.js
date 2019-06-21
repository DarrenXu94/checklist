import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './ListItem.scss'

export default class ListItem extends Component {
    state = {
        itemClass: "darkFont card animate-card-in"
    }
    input = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.input.current.value)
        this.props.deselectOnSubmit()
        this.props.handleSubmit(this.input)
    }

    handleDelete = (e) => {
        e.preventDefault()
        this.setState({ itemClass: 'darkFont card' })
        setTimeout(() => {
            this.props.handleDelete(this.props.data.id)
        }, 950);
    }
    componentDidUpdate() {
        if (this.input.current) {
            this.input.current.focus()
        }
    }

    EditTaskForm = () => {

        if (!this.props.selected) {
            return <li className={"listItem"} id={this.props.data.id}>
                {this.props.data.task}
            </li>
        }

        return (
            <form id={this.props.data.id} className={"baseForm"} onSubmit={this.handleSubmit}>
                <input
                    className={"animate-card-in"}
                    id={this.props.data.id}
                    type="text"
                    name={this.props.data.id}
                    defaultValue={this.props.data.task}
                    ref={this.input} />
                    <span className={"even-buttons"}>

                <i className="fas fa-check-square baseButton tooltip" onClick={this.handleSubmit}>
                    <span className="tooltiptext">Save changes</span>
                </i>
                <i className="fas fa-window-close baseButton tooltip">
                    <span className="tooltiptext">Cancel changes</span>
                </i>
                <i className="fas fa-trash-alt baseButton tooltip" onClick={this.handleDelete}>
                    <span className="tooltiptext">Delete item</span>
                </i>
                </span>

            </form>
        )
    }

    render() {
        return (
            <div className={this.state.itemClass} id={this.props.data.id}>
                <ul className={"ulStyle"}>
                    {this.EditTaskForm()}
                </ul>
            </div>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.object.isRequired,
};