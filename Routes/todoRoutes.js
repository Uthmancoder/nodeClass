const express = require("express")
const { viewTodo, createTodo, deleteTodo, reviewtodo, editTodo } = require("../Controllers/Todocontrollers")

const todoRoutes = express.Router()

todoRoutes.post("/createTodo", createTodo)
todoRoutes.get("/viewTodo", viewTodo )
todoRoutes.post("/deleteTodo", deleteTodo)
todoRoutes.get("/Edit/:id", reviewtodo)
todoRoutes.post("/editTodo", editTodo)

module.exports=todoRoutes
