import React, { useContext } from "react";
import M from 'materialize-css'
import "./style.css";
import { Collapsible, CollapsibleItem } from 'react-materialize';


const UserTaskBoard = (props) => {

    return (
        <Collapsible>
            {props.data.map(data => {
                return (
                    <CollapsibleItem key={data._id} header={`TITLE: ${data.title}`}>
                        <h6><span className="bold">Description:</span> <span className="taskList">{data.description}</span></h6>
                        <h6><span className="bold">Creator:</span> <span className="taskList">{data.createdBy}</span></h6>
                        <h6><span className="bold">Location:</span> <span className="taskList">{data.location}</span></h6>
                        <h6><span className="bold">Task Status:</span> <span className="taskList">{data.taskStatus}</span></h6>
                        <h6><span className="bold">Task Expires:</span> <span className="taskList">{data.taskExpires}</span></h6>
                        <h6><span className="bold">Status Value: </span> <span className="taskList">{data.statusValue}</span></h6>
                        <h6><span className="bold">Accepted By: </span> <span className="taskList">{data.completedBy}</span></h6>
                    </CollapsibleItem>
                    );
            })}
        </Collapsible>

    );
};

export default UserTaskBoard;