const express = require("express");
const ejs = require("ejs")
const app = express();
const todoRoutes = require("./Routes/todoRoutes")
const shoppingRoutes = require("./Routes/shoppingroute");
const mongoose = require("mongoose")
app.set("view engine", "ejs")


app.use(express.json());
require("dotenv").config()
app.use(express.urlencoded({ extended: true }))
app.use("/todo", todoRoutes)
app.use("/shop", shoppingRoutes);



app.get("/", (request, response) => {
    response.send([
        { name: "uthman", age: 11, favfood: "Beans and bread" },
        { name: "wole", age: 21, favfood: "tea and bread" },
        { name: "Adewole", age: 131, favfood: "Beans and bread" },
        { name: "Olawale", age: 1211, favfood: "Beans and bread" },
        { name: "Ayinde", age: 1211, favfood: "Beans and bread" }
    ])
})
const shoppingArray = []
const todoArray = []
const formArray = []


app.get("/html", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
})


app.get("/todo", )
app.get("/todo/getItems", )


app.post("./shop/postItems", )

app.get("/editItems/:id", )

const formSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        trim: true,
        wallet: { type: Number, required: true, trim: true },
    },
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
})
const formmodel = mongoose.model.form_tbs || mongoose.model("form_tbs", formSchema)
app.get("/form", async (req, res) => {
    try {
        const result = await formmodel.find({})
        if (!result) {
            return res.status(500).send({ message: "Error fetching from database", status: false })
        }
        console.log(result)
        res.render("form", { formArray: result })
    } catch (error) {
        return res.status(500).sendStatus({ message: "Internal server error", status: false })
    }
})

app.post("/form", async (req, res) => {
    const { Username, Name, Email, Password } = req.body
    console.log(req.body)
    try {
        const result = await formmodel.create({ Username, Name, Email, Password })
        if (!result) {
            return res.status(500).send({ message: "Error saving to database", status: false })
        }
        res.redirect("/form")
    } catch (error) {
        return res.status(500).send({ message: "Error saving to database", status: false })
    }
})
app.post("/todo", )
app.get("/Edit/:id", );

app.post("/Edittodo", );

app.post("/deleteTodo", )
const uri = process.env.MONGO_URI
const connect = () => {
    mongoose.set("strictQuery", false)
    mongoose.connect(uri).then((res) => {
        console.log("database connected");
    }).catch((err) => {
        console.log(err);
    })
}
connect()
const server = app.listen("3333", () => {
    console.log("the server has started on port 3333");
})
