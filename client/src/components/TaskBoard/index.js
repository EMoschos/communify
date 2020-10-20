import React, { useContext } from "react";
import M from 'materialize-css'
import TaskContext from "../../utils/TaskContext"
import "./style.css";
import API from "../../utils/API"
import FuncContext from "../../utils/FuncContext"

const TaskBoard = () => {

    const contextTasks = useContext(TaskContext)
    const updateContextTasks = useContext(FuncContext)

    const taskAccept = (id) => {
        let filterTasks = contextTasks.filter(data => {
            return data.completedBy === "tm@gg.com"
        })
        API.acceptTasks(id).then(res => {
            if (res.status === 200) {
                console.log("Successful update of task");
                M.toast({ html: "You Accepted the Task" });
                updateContextTasks()
                console.log(filterTasks)
            } else {
                console.log("Some error ocurred");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <ul className="collapsible">
            {contextTasks.map(data => {
                return (
                    <li key={data._id}>
                        <div className="collapsible-header">
                            <p className="listPad">TITLE: {data.title}</p>
                            <p className="listPad center-align">DESCRIPTION: {data.description}</p>
                            <p className="listPad right-align"> CREATOR: {data.createdBy}</p>
                        </div>
                        <div className="collapsible-body">
                            <h6>Location: {data.location}</h6>
                            <h6>Task Status: {data.taskStatus}</h6>
                            <h6>Task Expires: {data.taskExpires}</h6>
                            <h6>Status Value: {data.statusValue}</h6>
                            <h6>Accepted By: {data.completedBy}</h6>
                            <a className="btn-floating btn-small waves-effect waves-light blue" href="#" onClick={(e) => {e.preventDefault()
                                taskAccept(data._id)}}><i className="material-icons">add</i></a>
                        </div>
                    </li>
                );
            })}

        </ul>
    );
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
});

export default TaskBoard;