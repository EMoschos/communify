import React, { useState  } from "react";
import API from "../../utils/API"
import Auth from "../../routes/Auth"
import M from 'materialize-css'


function CreateTask(props) {
    const [task, setTask] = useState({
        title: "",
        description: "",
        category: "",
        location: ""
        // taskExpires: ""
    })


    // useEffect(() => {
    //     document.addEventListener('DOMContentLoaded', function () {
    //         const elems = document.querySelectorAll('.datepicker');
    //         const elems1 = document.querySelectorAll('select');
    //         M.FormSelect.init(elems1);
    //         M.Datepicker.init(elems, {onClose: handleChange});
    //     });
    //   }, []);

    const handleChange = (e) => {
        const { id, value } = e.target
        setTask(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleTaskCreate = (e) => {
        console.log(Auth.getToken())
        e.preventDefault()
        if (task.title) {
            const taskData = {
                "title": task.title,
                "description": task.description,
                "category": task.category,
                "location": task.location,
                "taskExpires": task.taskExpires,
                "createdBy": Auth.getToken()
            }
            API.taskCreate(taskData).then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    setTask({
                        title: "",
                        description: "",
                        category: "",
                        location: "",
                        taskExpires: ""
                    })
                    console.log("Successful Save of task")
                } else {
                    console.log("Some error ocurred");
                }
            })
                .catch(err => {
                    console.log(err);
                });
        } else {
            console.log('Please enter valid username and password')
        }

    }

    const datePicker = (date) => {
        console.log(date)
        setTask( task =>({...task, taskExpires: date }))
    }

    document.addEventListener('DOMContentLoaded', function (event) {
        const elems = document.querySelectorAll('.datepicker');
        const elems1 = document.querySelectorAll('select');
        M.FormSelect.init(elems1);
        M.Datepicker.init(elems, {
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
                            value={task.title}
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
                            value={task.description}
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
                            value={task.location}
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
                            value={task.category}
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

export default CreateTask;