const testList = [
    {id:"first", task:"Add in Font awesome"},
    {id:"second", task:"Editable tasks"},
    {id:"third", task:"Serverless"}
]

const timeout = ms => new Promise(res => setTimeout(res, ms))

export const FetchList = async () => {
    await timeout(1000)
    return testList
}