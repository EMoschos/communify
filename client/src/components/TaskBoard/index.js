import React, { useState, useEffect, useContext } from "react";
// import API from "../../utils/API"
import M from 'materialize-css'
import TaskContext from "../../utils/TaskContext"

const TaskBoard = () => {

    const contextTasks = useContext(TaskContext)
    console.log(contextTasks)

    // const [allTasks, setAllTask] = useState([])

    // useEffect(() => {
    //     API.getTasks().then((res) => {
    //         console.log("Get All Tasks");
    //         console.log(res);
    //         console.log(res.data);
    //         setAllTask(res.data);
    //         console.log(allTasks);
    //     });
    // }, []);

    const consoleLog = () => {
        console.log(contextTasks)
    }

    return (
        <ul className="collapsible">
            {contextTasks.map(data => {
                return (
                    <li key={data._id}>
                        <div className="collapsible-header" onClick={consoleLog}>
                            <div></div>
                            <div><i className="material-icons">filter_drama</i>
                                <p>Title: {data.title}</p>
                                <p>Description: {data.description}</p>
                                <p>Creator: {data.createdBy}</p>
                            </div>

                        </div>
                        <div className="collapsible-body">
                            <h6>Location: {data.location}</h6>
                            <h6>Task Status: {data.taskStatus}</h6>
                            <h6>Task Expires: {data.taskExpires}</h6>
                            <h6>Status Value: {data.statusValue}</h6>
                            <h6>Test</h6>
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