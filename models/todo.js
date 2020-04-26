const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    } 
});

module.exports = mongoose.model("Todo", Todo);