import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NewTask from './_components/NewTask/NewTask'
import RenderList from './_components/RenderList/RenderList'


import { FetchList } from './_actions/FetchData'

class App extends React.Component {
    state = {
        localList: []
    }
    async componentDidMount() {
        const localList = await FetchList()
        this.setState({ localList })
    }

    handleSubmit = (e) => {
        const value = e.current.value
        const name = e.current.id
        
        let currentList = this.state.localList
        let newList = currentList.map((el) => {
            return (el.id == name) ? {id:el.id, task: value} : el
        })

        this.setState({localList: newList})

    }

    render() {
        return (
            <div>
                <RenderList localList={this.state.localList} handleSubmit = {this.handleSubmit}/>
                <NewTask />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))