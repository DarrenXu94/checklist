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
        return (this.state.localList.length == 0) ? "Loading" : "DONE"
       
    }

    render(){
        return(
            <div>
                Hello World
                <ListItem data={"test"}/>
                { this.renderList() }
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))