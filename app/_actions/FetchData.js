const testList = [
    {task:"Test"},
    {task:"Test2"}
]

const timeout = ms => new Promise(res => setTimeout(res, ms))

export const FetchList = async () => {
    await timeout(10000)
    return testList
}