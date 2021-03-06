import React, { useState, useContext } from "react";
import API from "../../utils/API"
import Auth from "../../routes/Auth"
import M from 'materialize-css'
import FuncContext from "../../utils/FuncContext"
import { DatePicker, Select } from 'react-materialize';


function TaskCreate() {

    const updateContextTasks = useContext(FuncContext)

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        category: "",
        location: "",
        taskExpires: "",
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
            console.log(newTask)
            console.log(taskData)
            API.createTask(taskData).then(res => {
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
                    M.toast({ html: "Successful Save of task" })
                } else {
                    console.log("Some error ocurred in API");
                }
            })
                .catch(err => {
                    console.log(err);
                    console.log("Some error ocurred in Catch")
                    M.toast({ html: "Invalid inputs: Ensure all data is entered correctly" })
                });
        } else {
            console.log('Please enter valid username and password')
            M.toast({ html: "Invalid inputs: Ensure all data is entered correctly" })
        }

    }

    const datePicker = (date) => {
        console.log(date.toDateString())
        date = date.toDateString()
        setNewTask(task => ({ ...task, taskExpires: date }))
    }

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
                    <DatePicker
                        label="Task Expiry Date"
                        placeholder="Expiry Date"
                        id="taskExpires"
                        value={newTask.taskExpires}
                        onChange={datePicker}
                    />
                    <Select label="Task Category"
                        placeholder="This task category is"
                        id="category"
                        type="select"
                        value={newTask.category}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Choose Category</option>
                        <option value="Physical">Physical</option>
                        <option value="Education">Education</option>
                        <option value="IT">IT</option>
                    </Select>
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