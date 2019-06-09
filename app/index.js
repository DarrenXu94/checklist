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

    render() {
        return (
            <div>
                <RenderList localList={this.state.localList} />
                <NewTask />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))