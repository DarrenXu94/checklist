const testList = [
    {id:"first", task:"Canned chickpeas"},
    {id:"second", task:"Bread"},
    {id:"third", task:"Vegetables"}
]

const timeout = ms => new Promise(res => setTimeout(res, ms))

export const FetchList = async () => {
    await timeout(1000)
    return testList
}