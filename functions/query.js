let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let conn = null;
let ShoppingSchema;
let ShoppingLayout;


const uri = `mongodb://${process.env.MONGO_AUTH}@ds247377.mlab.com:47377/shopping`;

exports.handler = async function (event, context, callback) {

  let queryStringParameters = event.queryStringParameters
  let method = event.httpMethod

  context.callbackWaitsForEmptyEventLoop = false;

  let res = await run(method, queryStringParameters)
  // return res
  callback(null, {
    statusCode:200,
    body: JSON.stringify(res)
  })

};

async function run(method, queryStringParameters) {
  if (conn == null) {
    conn = await mongoose
      .connect(uri, { useNewUrlParser: true })
    ShoppingSchema = new Schema({
      task: String
    })
    ShoppingLayout = mongoose.model('shoppingModel', ShoppingSchema)
  }

  switch(method){
    case 'GET':
      return await findAll()
    case 'POST':
      return await postOne(queryStringParameters)
    case 'PUT':
      return await putOne(queryStringParameters)
    case 'DELETE':
      return await deleteOne(queryStringParameters)  
    default:
      return  
  }
}

async function findAll () {
  return await ShoppingLayout.find()
}

async function postOne (queryStringParameters) {
  let task = queryStringParameters['task'];
  const newTask = new ShoppingLayout({
    task
  })
  return await newTask.save()
}

async function putOne (queryStringParameters) {
  let id = queryStringParameters['id'];
  let task = queryStringParameters['task'];
  return await ShoppingLayout.updateOne({_id:id}, {task})
}

async function deleteOne (queryStringParameters) {
  let id = queryStringParameters['id'];
  return await ShoppingLayout.deleteOne({_id:id})
}