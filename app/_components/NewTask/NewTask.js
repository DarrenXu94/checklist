import React, { Component } from 'react'
import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";

export default class NewTask extends Component {
    state = {
        showForm: false
    }
    NewTaskForm = () => {
        if (!this.state.showForm) {
            return null
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
                        <button onClick={this.toggleForm}>
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
