import React, { Component } from 'react'
import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";
import cx from 'classnames'

import './NewTask.scss'

export default class NewTask extends Component {
    state = {
        showForm: false
    }
    input = React.createRef();

    handleAddNew = (e) => {
        e.preventDefault()
        this.props.handleAddNew(this.input)
    }

    NewTaskForm = () => {
        if (!this.state.showForm) {
            return null
        }

        return (
            <form className={"baseForm"} onSubmit={this.handleAddNew}>
                <input type="text" name="task" defaultValue={""} ref={this.input} />
                <button className={"baseButton"} onClick={this.handleAddNew}>Add</button>
            </form>
        )
    }
    toggleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    clearNewTask = () => {
        this.setState({showForm: false})
    }

    render() {
        return (
            <OutsideAlerter parentOutsideFunction={this.clearNewTask}>
                <div>
                    <div>
                        <button className={"newTaskButton"} onClick={this.toggleForm}>
                            <i className="fas fa-plus"></i>
                            New Task
                        </button>
                    </div>
                    {this.NewTaskForm()}
                </div>
            </OutsideAlerter>
        )
    }
}
