const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    Title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },

    Description: {
        type: String,
        trim: true,
        required: "Description is Required"
    },

    category: {
        type: String,
        trim: true,
        required: "category is Required"
    },

    location: {
        type: String,
        trim: true,
        required: "Location is Required",
    },

    status: {
        type: String,
        trim: true,
        required: "status is Required",
    },

    createdBy: {
        type: String,
        required: "Creator is Required",
    },

    statusValue: {
        type: Number,
        default: 100,
        required: "Value is Required",
    },

    taskExpires: {
        type: Date,
    },

    completedBy: {
        type: String,
    },

    taskCompleted: {
        type: Boolean,
        default: false
    },

    taskCreated: {
        type: Date,
        default: Date.now
    }
});


const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
