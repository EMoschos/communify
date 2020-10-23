import React, { useState, useEffect, useContext } from "react";
import TaskCreate from "../components/TaskCreate";
import API from "../utils/API";
import M from 'materialize-css'
import UserTaskBoard from "../components/UserTaskBoard";
import UserContext from "../utils/UserContext";
import TaskContext from "../utils/TaskContext";
import UpdateUser from "../components/UpdateUser";
import FuncContext from "../utils/FuncContext"
import { Tabs, Tab, Modal, Button } from "react-materialize";


const Account = () => {
    const user = useContext(UserContext)
    const contextTasks = useContext(TaskContext)
    const updateContextTasks = useContext(FuncContext)

    let filterCompletedByTasks
    let filterCreatedByTasks
    let skillsToRender;
    let expToRender;

    if (contextTasks) {
        console.log(contextTasks)
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

   function createdTaskDelete(e) {
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        console.log(id)
        API.deleteCreatedTasks(id).then(res => {
            if (res.status === 200) {
                M.toast({ html: "You deleted the task" });
                updateContextTasks()
            } else {
                console.log("Some error ocurred");
            }
        }).catch(err => {
            console.log(err);
        });

    }

    function acceptedTaskResign(e) {
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        console.log(id)
        API.deleteCreatedTasks(id).then(res => {
            if (res.status === 200) {
                M.toast({ html: "You resigned from the task" });
                updateContextTasks()
            } else {
                console.log("Some error ocurred");
            }
        }).catch(err => {
            console.log(err);
        });

    }


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
                            <Tabs>
                                <Tab title="Profile" idx="tab-1">
                                    <div className="card-content grey lighten-4">
                                        <div className="right">
                                            <Modal header="Update User" trigger={<Button><i className="material-icons">create</i></Button>}>
                                                <UpdateUser />
                                            </Modal>
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
                                </Tab>
                                <Tab title="Accepted Tasks" idx="tab-2">
                                    <div className="card-content grey lighten-4">
                                        <UserTaskBoard data={filterCompletedByTasks}
                                        onClick={acceptedTaskResign}
                                        tooltip="Resign from Task" />
                                    </div>
                                </Tab>
                                <Tab title="Created Tasks" idx="tab-3">
                                    <div className="card-content grey lighten-4">
                                        <UserTaskBoard 
                                        data={filterCreatedByTasks}
                                        onClick={createdTaskDelete} 
                                        tooltip="Delete created task"/>
                                    </div>
                                </Tab>

                            </Tabs>
                            <div className="card-action blue-grey lighten-2">
                                <Modal
                                    header="Create Task"
                                    trigger={<Button>Create Task</Button>}
                                >
                                    <TaskCreate />
                                </Modal>
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
        </div >
    );
};

export default Account;