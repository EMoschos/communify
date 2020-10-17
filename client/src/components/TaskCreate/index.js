import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API"
import Auth from "../../routes/Auth"
import M from 'materialize-css'
import TaskContext from "../../utils/TaskContext"
import FuncContext from "../../utils/FuncContext"


function TaskCreate(props) {

    const updateContextTasks = useContext(FuncContext)
    const contextTasks = useContext(TaskContext)

    console.log(contextTasks)
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        category: "",
        location: ""
        // taskExpires: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setNewTask(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleTaskCreate = (e) => {
        console.log(Auth.getToken())
        e.preventDefault()
        if (newTask.title) {
            const taskData = {
                "title": newTask.title,
                "description": newTask.description,
                "category": newTask.category,
                "location": newTask.location,
                "taskExpires": newTask.taskExpires,
                "createdBy": Auth.getToken()
            }
            API.createTask(taskData).then(res => {
                console.log(res)
                console.log(res.data)
                if (res.status === 200) {
                    updateContextTasks()
                    setNewTask({
                        title: "",
                        description: "",
                        category: "",
                        location: "",
                        taskExpires: ""
                    })
                    console.log("Successful Save of task")
                    M.toast({html: "Successful Save of task"})
                } else {
                    console.log("Some error ocurred");
                }
            })
                .catch(err => {
                    console.log(err);
                    console.log("Some error ocurred")
                    M.toast({html: "Invalid inputs: Ensure all data is entered correctly"})
                });
        } else {
            console.log('Please enter valid username and password')
            M.toast({html: "Invalid inputs: Ensure all data is entered correctly"})
        }

    }

    const datePicker = (date) => {
        console.log(date)
        setNewTask(task => ({ ...task, taskExpires: date }))
    }

    document.addEventListener('DOMContentLoaded', function () {
        const elems = document.querySelectorAll('.datepicker');
        const elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1);
        M.Datepicker.init(elems, {
            container: "body",
            format: "dd-mm-yyyy",
            onSelect: datePicker
        })
    });

    return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                placeholder="Task Title"
                                id="title"
                                type="text"
                                className="validate"
                                value={newTask.title}
                                onChange={handleChange}
                            />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                placeholder="This task is about..."
                                id="description"
                                type="text"
                                className="validate"
                                value={newTask.description}
                                onChange={handleChange}
                            />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                placeholder="Location task to be completed"
                                id="location"
                                type="text"
                                className="validate"
                                value={newTask.location}
                                onChange={handleChange}
                            />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                placeholder="Expiry Date"
                                id="taskExpires"
                                type="text"
                                className="datepicker"
                            />
                            <label htmlFor="taskExpires">Task Expires</label>
                        </div>
                        <div className="input-field col s6">
                            <select
                                placeholder="This task category is"
                                id="category"
                                type="select"
                                value={newTask.category}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Choose your option</option>
                                <option value="Physical">Physical</option>
                                <option value="Education">Education</option>
                                <option value="IT">IT</option>
                            </select>
                            <label>Category</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleTaskCreate}>Submit
          <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
    );
}

export default TaskCreate;