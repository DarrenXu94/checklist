import axios from 'axios'

export const Query = async (method, args) => {
    switch (method){
        case 'GET':
            return await FetchList()
        case 'PUT':
            return await PutOne(args)
        case 'POST':
            return await PostOne(args) 
        case 'DELETE':
            return await DeleteOne(args)                

    }
}

const FetchList = async () => {
    return await axios.get('/.netlify/functions/query')
}

const PutOne = async (args) => {
    let { id, task } = args
    return await axios.put(`/.netlify/functions/query?id=${id}&task=${task}`)
}

const PostOne = async (args) => {
    let { task } = args
    return await axios.post(`/.netlify/functions/query?task=${task}`)
}

const DeleteOne = async (args) => {
    let { id } = args
    return await axios.put(`/.netlify/functions/query?id=${id}`)
}