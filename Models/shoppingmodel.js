const mongoose = require("mongoose");

const shoppingSchema = new mongoose.Schema({
  items: String,
  quantity: Number,
  price: String,
  total: String
});

module.exports = mongoose.model("shopping_tbs", shoppingSchema);
