const timeout = ms => new Promise(res => setTimeout(res, ms))

export const UpdateData = async (data) => {
    await timeout(1000)
    console.log(data)
}