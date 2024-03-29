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

    componentDidUpdate(){
        if (this.input.current){
            this.input.current.focus()
        }
    }

    NewTaskForm = () => {
        if (!this.state.showForm) {
            return null
        }

        return (
            <form className={"baseForm new-task-style"} onSubmit={this.handleAddNew}>
                <input className={"fade-form-in width-70"} type="text" name="task" defaultValue={""} ref={this.input} />
                <span className={"button-span"}>
                    <button className={"baseButton min-width-x"} onClick={this.handleAddNew}>Add</button>
                </span>
            </form>
        )
    }
    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    clearNewTask = () => {
        this.setState({ showForm: false })
    }

    render() {
        return (
            <OutsideAlerter parentOutsideFunction={this.clearNewTask}>
                <div className={"addTask"}>
                    <div className={"add"} onClick={this.toggleForm}>
                        <i className="fas fa-plus"></i>
                        <span className={"darkFont"}>
                            New Item
                        </span>
                    </div>
                    {this.NewTaskForm()}
                </div>
            </OutsideAlerter>
        )
    }
}
