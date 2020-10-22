import React, { useContext } from "react";
import M from 'materialize-css'
import TaskContext from "../../utils/TaskContext"
import "./style.css";
import API from "../../utils/API"
import FuncContext from "../../utils/FuncContext"
import { Collapsible, CollapsibleItem } from 'react-materialize';

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
        <Collapsible>
            {contextTasks.map(data => {
                return (
                    <CollapsibleItem key={data._id} header={<h6><span className="bold">Title:</span> {data.title}</h6>}>
                        <h6><span className="bold">Description:</span> <span className="taskList">{data.description}</span></h6>
                        <h6><span className="bold">Creator:</span> <span className="taskList">{data.createdBy}</span></h6>
                        <h6><span className="bold">Location:</span> <span className="taskList">{data.location}</span></h6>
                        <h6><span className="bold">Task Status:</span> <span className="taskList">{data.taskStatus}</span></h6>
                        <h6><span className="bold">Task Expires:</span> <span className="taskList">{data.taskExpires}</span></h6>
                        <h6><span className="bold">Status Value: </span> <span className="taskList">{data.statusValue}</span></h6>
                        <h6><span className="bold">Accepted By: </span> <span className="taskList">{data.completedBy}</span></h6>
                        <a className="btn-floating btn-small waves-effect waves-light blue" href="#" onClick={(e) => {e.preventDefault()
                                taskAccept(data._id)}}><i className="material-icons">add</i></a>
                    </CollapsibleItem>
                    );
            })}
        </Collapsible>
    );
};

// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.collapsible');
//     M.Collapsible.init(elems);
// });

export default TaskBoard;