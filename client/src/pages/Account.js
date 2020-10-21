import React, { useState, useEffect, useContext } from "react";
import TaskCreate from "../components/TaskCreate"
// import API from "../utils/API"
import UserTaskBoard from "../components/UserTaskBoard";
import M from 'materialize-css'
import UserContext from "../utils/UserContext"
import TaskContext from "../utils/TaskContext"
import UpdateUser from "../components/UpdateUser"

const Account = () => {
    const user = useContext(UserContext)
    const contextTasks = useContext(TaskContext)

    let filterCompletedByTasks
    let filterCreatedByTasks
    let skillsToRender;
    let expToRender;

    if (contextTasks) {
        filterCompletedByTasks = contextTasks.filter(data => {
            return data.completedBy === user.email
        })

        filterCreatedByTasks = contextTasks.filter(data => {
            return data.createdBy === user.email
        })
        if (user.skills) {
            let index = 0;
            skillsToRender = user.skills.map((data) => {
                console.log(data)
                index++;
                return <div className="chip" key={index}>
                    {data} </div>
            })
        } else {
            skillsToRender = "Loading..."
        }

        if (user.experience) {
            let index = 0;
            index++;
            expToRender = user.experience.map((data) => {
                console.log(data)
                return <div className="chip" key={index}>
                    {data} </div>
            })
        } else {
            expToRender = "Loading..."
        }
    }
    // let filterCompletedByTasks = contextTasks.filter(data => {
    //     return data.completedBy === user.email
    // })

    // let filterCreatedByTasks = contextTasks.filter(data => {
    //     return data.createdBy === user.email
    // })

    // let skillsToRender;
    // if (user.skills) {
    //     let index = 0;
    //     skillsToRender = user.skills.map((data) => {
    //         console.log(data)
    //         index ++;
    //         return <div className="chip" key={index}>
    //             {data} </div>
    //     })
    // } else {
    //     skillsToRender = "Loading..."
    // }

    // let expToRender;
    // if (user.experience) {
    //     let index = 0;
    //     index ++;
    //     expToRender = user.experience.map((data) => {
    //         console.log(data)
    //         return <div className="chip" key={index}>
    //             {data} </div>
    //     })
    // } else {
    //     expToRender = "Loading..."
    // }

    // useEffect(()=>{
    //     document.addEventListener('DOMContentLoaded', function () {
    //         var elems = document.querySelectorAll('.collapsible');
    //         M.Collapsible.init(elems);
    //         var elems1 = document.querySelectorAll('.modal');
    //         M.Modal.init(elems1);
    //         var elems2 = document.querySelectorAll('.tabs');
    //         M.Tabs.init(elems2);
    //     });
    // })

    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <div className="card sticky-action hoverable">
                            <div className="card-content center waves-effect waves-block waves-light">
                                <img src={`https://avatars.dicebear.com/api/initials/${user.firstName} ${user.lastName}.svg?options[top][]=longHair`} alt="" className="circle center responsive-img z-depth-5"
                                    height="30%" width="30%" />
                            </div>
                            <div className="card-content blue-grey darken-1">
                                <span className="card-title activator white-text text-darken-4">{user.firstName} {user.lastName}<i className="material-icons right">more_vert</i></span>
                                <p><a href="#" className="yellow-text">Status Level: {user.statusLevel}</a></p>
                                <p><a href="#" className="yellow-text">Status Points: {user.statusPoints}</a></p>
                            </div>
                            <div className="card-tabs">
                                <ul className="tabs tabs-fixed-width">
                                    <li className="tab"><a className="active" href="#test4">Profile</a></li>
                                    <li className="tab"><a href="#test5">Accepted Tasks</a></li>
                                    <li className="tab"><a href="#test6">Created Tasks</a></li>
                                </ul>
                            </div>
                            <div className="card-content grey lighten-4">
                                <div id="test4">
                                    <div className="right">
                                        <a className="waves-effect waves-light btn modal-trigger" href="#modal2"><i className="material-icons">create</i></a>
                                        <div id="modal2" className="modal">
                                            <div className="modal-content">
                                                <UpdateUser />
                                            </div>
                                        </div>
                                    </div>
                                    <h6>Full Name </h6>
                                    <p>{user.firstName} {user.lastName}</p>
                                    <h6>e-Mail: </h6>
                                    <p>{user.email}</p>
                                    <h6>Address: </h6>
                                    <p>{user.address}</p>
                                    <h6>Skills:</h6>
                                    {skillsToRender}
                                    <h6>Experience: </h6>
                                    {expToRender}
                                </div>
                                <div id="test5"><UserTaskBoard data={filterCompletedByTasks} /></div>
                                <div id="test6"><UserTaskBoard data={filterCreatedByTasks} /></div>
                            </div>
                            <div className="card-action blue-grey lighten-2">
                                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Create New Task</a>
                                <div id="modal1" className="modal">
                                    <div className="modal-content">
                                        <TaskCreate />
                                    </div>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Communify Status<i
                                    className="material-icons right">close</i></span>
                                <h5>Scout = 0 - 200 points</h5>
                                <h5>Good Samaritan = 200 - 500 points</h5>
                                <h5>Champion = 500 - 1000 points</h5>
                                <h5>Local Legend = 1000+ points</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
    var elems1 = document.querySelectorAll('.modal');
    M.Modal.init(elems1);
    var elems2 = document.querySelectorAll('.tabs');
    M.Tabs.init(elems2);
});

export default Account;