import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ListItem extends Component {

    state = {
        editMode: false
    }

    renderSelected = () => {
        return (this.props.selected)
        ? <i className="fas fa-edit"></i>
        : null

    }

    EditTaskForm = () => {
        if (!this.state.editMode) {
            return this.props.data
        }

        if (!this.props.selected){
            this.setState({editMode: false})
            return this.props.data
        }

        return (
            <form>
                <label>
                    Task:
                    <input type="text" name="task" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
    
    render() {
        return (
            <div id={this.props.data}>
                {this.EditTaskForm()}
                {this.renderSelected()}
                <i id={this.props.data} className="fas fa-edit" onClick={()=>this.setState({editMode: !this.state.editMode})}></i>
            </div>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.string.isRequired,
  };