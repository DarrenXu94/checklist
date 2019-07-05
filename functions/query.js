const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let conn = null;

const uri = `mongodb://${process.env.MONGO_AUTH}@ds247377.mlab.com:47377/shopping`;

exports.handler = async function (event, context, callback) {

  context.callbackWaitsForEmptyEventLoop = false;

  let res = await run()
  return res

};

async function run() {
  if (conn == null) {
    conn = await mongoose
      .connect(uri, { useNewUrlParser: true })
    const ShoppingSchema = new Schema({
      task: String
    })

    const ShoppingLayout = mongoose.model('shoppingModel', ShoppingSchema)
  }

  let items = await ShoppingLayout
  return items
}