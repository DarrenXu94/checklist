import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './ListItem.scss'

export default class ListItem extends Component {
    input = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.input.current.value)
        this.props.deselectOnSubmit()
        this.props.handleSubmit(this.input)
    }

    EditTaskForm = () => {

        if (!this.props.selected){
            return this.props.data.task
        }

        return (
            <form id={this.props.data.id} onSubmit={this.handleSubmit}>
                <input id={this.props.data.id} type="text" name={this.props.data.id} defaultValue={this.props.data.task} ref={this.input} />
                {/* <input id={this.props.data.id} type="submit" value="Submit" /> */}
                <i className="fas fa-check-square" onClick={this.handleSubmit}></i>
                <i className="fas fa-window-close"></i>

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