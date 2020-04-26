const { Router } = require("express");
const Todo = require("../models/todo");
const router = Router();

router.get("/", async (req, res) => {
    const todos = await Todo.find({}).lean();

    res.render("index", {
        title: "Todo App",
        todos
    });
});

router.post("/create", async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save();
    res.redirect("/");
});

router.post("/deltodo", async (req, res) => {
    const todo = await Todo.findById(req.body.id);

    await Todo.findOneAndDelete({_id: todo});
    res.redirect("/");
})

module.exports = router;