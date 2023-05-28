const todomodel = require("../Models/Todomodel")

const viewTodo = async (req, res) => {
    try {
        const result = await todomodel.find({})
        if (!result) {
            return res.status(500).send({ message: "Error fetching from database", status: false })
        }        console.log(result)
        res.render("index", { todoArray: result })
    } catch (error) {
        return res.status(500).sendStatus({ message: "Internal server error", status: false })
    }
}

const createTodo = async (req, res) => {
    console.log(req.body);
    const { title, text } = req.body
    try {
        const result = await todomodel.create({ title, text })
        if (!result) {
            return res.status(500).send({ message: "Error saving to database", status: false })
        }
        res.redirect("/todo/viewTodo")
    } catch (error) {
        return res.status(500).sendStatus({ message: "Internal server error", status: false })
    }
}

const reviewtodo = async (req, res) => {
    try {
      const id = req.params.id;
      const todo = await todomodel.findOne({ _id: id });
  
      if (!todo) {
        return res.status(404).send("Todo not found");
      }
  
      const { title, text, _id } = todo;
      res.render("Edit", { title, text, _id });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

const editTodo = async (req, res) => {
    try {
      const _id = req.body._id;
      const newTitle = req.body.title;
      const newText = req.body.text;
  
      const updatedTodo = await todomodel.findByIdAndUpdate(
        { _id },{ title: newTitle, text: newText }
      );
  
      if (!updatedTodo) {
        return res.status(404).send("Todo not found");
      }
  
      res.redirect("/todo/viewTodo");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  const deleteTodo = async (req, res) => {
    try {
        console.log(req.body)
        let index = req.body.index;
        console.log(index)
        const deleteitem = await todomodel.findByIdAndDelete({_id: index })
        console.log(deleteitem)
        res.redirect("/todo/viewTodo")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {viewTodo, createTodo, reviewtodo, editTodo, deleteTodo}