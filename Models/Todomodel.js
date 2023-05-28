const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    title: String,
    text: String
})
const todomodel = mongoose.model.todo_tbs || mongoose.model("todo_tbs", todoSchema)
module.exports = todomodel

