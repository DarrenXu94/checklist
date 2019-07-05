var mongoose = require('mongoose');

let conn = null;

const uri = `mongodb://${process.env.MONGO_AUTH}@mongourl:47377/shopping`;

exports.handler = async function(event, context, callback) {

  context.callbackWaitsForEmptyEventLoop = false;

  let res = await run()
  
};

async function run() {
  conn = await mongoose
  .connect(uri, { useNewUrlParser: true })
  const ShoppingSchema = new Schema({
      task: String
  })

  const ShoppingLayout = mongoose.model('shoppingModel', ShoppingSchema)
  let items = await ShoppingLayout
  return items
}