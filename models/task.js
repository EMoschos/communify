const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },

    description: {
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

    statusValue: {
        type: Number,
        default: 100,
    },

    createdBy: {
        type: String,
        required: "Creator is Required",
    },

    completedBy: {
        type: String,
    },
    
    taskCreated: {
        type: Date,
        default: Date.now
    },

    taskExpires: {
        type: Date,
        default: "No date set",
    },

    taskStatus: {
        type: String,
        trim: true,
        default: "Open",
    },

    taskCompleted: {
        type: Boolean,
        default: false
    }
});


const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
