import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import NewTask from './_components/NewTask/NewTask'
import RenderList from './_components/RenderList/RenderList'
import Toggle from './_components/Toggle/Toggle'

import Mode from './_stores/Mode'
import { ModeContext } from './_stores/ModeContext'


import { Query } from './_actions/Query'
import { UpdateData, DeleteData } from './_actions/UpdateData'
import AmountManager from './_components/AmountTracker/AmountManager';

class App extends React.Component {
    state = {
        localList: []
    }

    tagSpecial = (localList) => {
        return localList.map(el => {
            el.preload = true;
            return el
        })
    }

    queryMongoFind = async () => {
        let fetchQuery = await Query('GET')
        console.log(fetchQuery.data)
        // Error handling here?
        return fetchQuery.data
    }

    async componentDidMount() {
        let localList = await this.queryMongoFind()
        localList = this.tagSpecial(localList)
        this.setState({ localList })
    }


    handleAddNew = async (e) => {
        const value = e.current.value
        let fetchQuery = await Query('POST', { task: value })
        console.log(fetchQuery.data)

        let newList = this.state.localList
        newList.push({
            _id: fetchQuery.data._id,
            task: fetchQuery.data.task
        })
        console.log(newList)
        this.setState({ localList: newList })


    }

    handleSubmit = async (e) => {
        const value = e.current.value
        const id = e.current.id

        let currentList = this.state.localList
        const newList = currentList.map((el) => {
            return (el._id == id) ? { _id: el._id, task: value } : el
        })

        this.setState({ localList: newList })
        // await UpdateData({id:id, task: value})
        let putQuery = await Query('PUT', { id: id, task: value })


    }

    handleDelete = async (e) => {
        let currentList = this.state.localList
        const newList = currentList.filter(el => {
            return (el._id !== e)
        })
        this.setState({ localList: newList })
        let deleteQuery = await Query('DELETE', { id: e })
        console.log(deleteQuery)

    }

    render() {
        return (
            <div>
                <Mode>

                    <header>

                        <h1 className={"darkFont"}>Shopping List</h1>
                        <Toggle />
                        {/* <AmountManager /> */}
                    </header>
                    <section className={"content"} >
                        <ModeContext.Consumer>
                            {state =>
                                (state.modeData == 'edit') && <NewTask handleAddNew={this.handleAddNew} />
                            }
                        </ModeContext.Consumer>

                        <RenderList
                            localList={this.state.localList}
                            handleSubmit={this.handleSubmit}
                            handleDelete={this.handleDelete}
                        />
                    </section>
                </Mode>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))