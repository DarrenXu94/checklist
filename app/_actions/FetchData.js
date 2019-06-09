const testList = [
    {task:"Add in Font awesome"},
    {task:"Editable tasks"},
    {task:"Serverless"}
]

const timeout = ms => new Promise(res => setTimeout(res, ms))

export const FetchList = async () => {
    await timeout(1000)
    return testList
}