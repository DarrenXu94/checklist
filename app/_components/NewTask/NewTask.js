import React, { Component } from 'react'

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
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.toggleForm}>+ New Task</button>
                </div>

                {this.NewTaskForm()}
            </div>
        )
    }
}
