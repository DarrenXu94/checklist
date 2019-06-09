import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ListItem from './_components/ListItem/ListItem'
import { FetchList } from './_actions/FetchData'

class App extends React.Component{
    state = {
        localList: []
    }
    async componentDidMount(){
        const localList = await FetchList()
        this.setState({localList})
    }

    renderList = () => {
        let {localList} = this.state
        return (localList.length == 0) 
        ? "Loading" 
        : localList.map((val) => {
            return <ListItem key = {val.task} data={val.task}/>

        })
       
    }

    render(){
        return(
            <div>
                { this.renderList() }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))