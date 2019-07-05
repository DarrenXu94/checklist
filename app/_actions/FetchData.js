const testList = [
    {id:"first", task:"Canned chickpeas"},
    {id:"second", task:"Bread"},
    {id:"third", task:"Vegetables"},
    {id:"fourth", task:"A very long message for tissues tissuestissuestissuestissuestissuestissues a a a a aa a a a a aa a a a"}
]

const timeout = ms => new Promise(res => setTimeout(res, ms))

export const FetchList = async () => {
    await timeout(1000)
    return testList
}