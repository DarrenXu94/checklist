let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let conn = null;
let PriceSchema;
let PriceLayout;

const uri = `mongodb://${process.env.MONGO_AUTH}@ds247377.mlab.com:47377/shopping`;

exports.handler = async function (event, context, callback) {

    let queryStringParameters = event.queryStringParameters
    let method = event.httpMethod

    context.callbackWaitsForEmptyEventLoop = false;

    let res = await run(method, queryStringParameters)
    // return res
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
    })

};

async function run(method, queryStringParameters) {
    if (conn == null) {
        conn = await mongoose
            .connect(uri, { useNewUrlParser: true })
        PriceSchema = new Schema({
            price: String
        })
        PriceLayout = mongoose.model('priceModel', PriceSchema)
    }

    switch (method) {
        case 'GET':
            return await findPrice()
        case 'PUT':
            return await putOne(queryStringParameters)
        default:
            return

    }
}

async function findPrice() {
    return await PriceLayout.findOne()
}

async function putOne(queryStringParameters) {
    let res = await findPrice()
    let id = res._id
    let price = queryStringParameters['price'];
    return await PriceLayout.updateOne({ _id: id }, { price })
}