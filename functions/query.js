let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let conn = null;
let ShoppingSchema;
let ShoppingLayout;

const uri = `mongodb://${process.env.MONGO_AUTH}@ds247377.mlab.com:47377/shopping`;

exports.handler = async function (event, context, callback) {

  context.callbackWaitsForEmptyEventLoop = false;

  let res = await run()
  // return res
  callback(null, {
    statusCode:200,
    body: JSON.stringify(res)
  })

};

async function run() {
  if (conn == null) {
    conn = await mongoose
      .connect(uri, { useNewUrlParser: true })
    ShoppingSchema = new Schema({
      task: String
    })
    ShoppingLayout = mongoose.model('shoppingModel', ShoppingSchema)
  }

  let items = await ShoppingLayout
  return items
}