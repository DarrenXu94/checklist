import axios from 'axios'

export const PriceQuery = async (method, args) => {
    switch (method) {
        case 'GET':
            return await FetchPrice()
        case 'PUT':
            return await PutOne(args)

    }
}

const FetchPrice = async () => {
    return await axios.get('/.netlify/functions/priceQuery')
}

const PutOne = async (args) => {
    let { price } = args
    return await axios.put(`/.netlify/functions/priceQuery?price=${price}`)
}