import React, { useContext } from "react";
import M from 'materialize-css'
import "./style.css";

const UserTaskBoard = (props) => {

    return (
        <ul className="collapsible">
            {props.data.map(data => {
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

export default UserTaskBoard;