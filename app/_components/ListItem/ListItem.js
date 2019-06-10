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
            return this.props.data.task
        }

        return (
            <form id={this.props.data.id} className={"baseForm"} onSubmit={this.handleSubmit}>
                <input  
                id={this.props.data.id} 
                type="text" 
                name={this.props.data.id} 
                defaultValue={this.props.data.task} 
                ref={this.input} />
                <i className="fas fa-check-square" onClick={this.handleSubmit}></i>
                <i className="fas fa-window-close"></i>
                <i className="fas fa-trash-alt" onClick={this.handleDelete}></i>
            </form>
        )
    }
    
    render() {
        return (
            <div className={"darkFont"} id={this.props.data.id}>
                {this.EditTaskForm()}
            </div>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.object.isRequired,
  };