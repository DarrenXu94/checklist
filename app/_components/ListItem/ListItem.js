import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './ListItem.scss'

export default class ListItem extends Component {
    input = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.input.current.value)
        this.props.deselectOnSubmit()
        this.props.handleSubmit(this.input)
    }

    handleDelete = (e) => {
        e.preventDefault()
        this.props.handleDelete(this.props.data.id)
    }

    EditTaskForm = () => {

        if (!this.props.selected){
            return <li className={"listItem"} id={this.props.data.id}>
                {this.props.data.task}
            </li>
        }

        return (
            <form id={this.props.data.id} className={"baseForm"} onSubmit={this.handleSubmit}>
                <input  
                id={this.props.data.id} 
                type="text" 
                name={this.props.data.id} 
                defaultValue={this.props.data.task} 
                ref={input => this.input = input && input.focus()} />
                <i className="fas fa-check-square baseButton" onClick={this.handleSubmit}></i>
                <i className="fas fa-window-close baseButton"></i>
                <i className="fas fa-trash-alt baseButton" onClick={this.handleDelete}></i>
            </form>
        )
    }
    
    render() {
        return (
            <div className={"darkFont card"} id={this.props.data.id}>
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