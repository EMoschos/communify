import React, { useState, useEffect, useContext } from "react";
import TaskCreate from "../components/TaskCreate"
// import API from "../utils/API"
import TaskBoard from "../components/TaskBoard";
import M from 'materialize-css'
import UserContext from "../utils/UserContext"
import UpdateUser from "../components/UpdateUser"

const Account = () => {
    const user = useContext(UserContext)

    let skillsArr = user.skills
    let expArr = user.experience

    console.log(skillsArr)
    console.log(expArr)

    const [editUser, setEditUser] = useState(false)

    // const [allTasks, setAllTask] = useState([])

    // useEffect(() => {
    //     API.getTasks().then((res) => {
    //         console.log("Get All Tasks");
    //         console.log(res);
    //         console.log(res.data);
    //         setAllTask(res.data);  
    //     });
    // }, []);

    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <div className="card sticky-action hoverable">
                            <div className="card-content center waves-effect waves-block waves-light">
                                <img src="https://avatars.dicebear.com/api/avataaars/sarah.svg?options[top][]=longHair" alt="" className="circle center responsive-img z-depth-5"
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
                                        <a className="waves-effect waves-light btn modal-trigger" href="/updateUser">Update User</a>
                                        <div id="modal2" className="modal">
                                            <div className="modal-content">
                                                <UpdateUser 
                                                id={user._id}
                                                // firstName={user.firstName}
                                                // lastName={user.lastName}
                                                // address="Need to set"
                                                // skills={user.skills}
                                                // experience={user.experience}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h6>Full Name </h6>
                                    <p>{user.firstName} {user.lastName}</p>
                                    <h6>e-Mail: </h6>
                                    <p>{user.email}</p>
                                    <h6>Address: </h6>
                                    <p>{user.email}</p>
                                    <h6>Skills:</h6>
                                    <div className="chip">
                                        {skillsArr} 
                                        </div>
                                    <h6>Experience: </h6>
                                    {/* {user.experience.map(data => {
                                        return (<div class="chip">
                                            {data} </div>)
                                    })} */}
                                    <div className="chip">
                                        {user.experience}
                                        </div>
                                </div>
                                <div id="test5"><TaskBoard /></div>
                                <div id="test6">Test 3</div>
                            </div>
                            <div className="card-action blue-grey lighten-2">
                                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Create New Task</a>
                                <div id="modal1" className="modal">
                                    <div className="modal-content">
                                        <TaskCreate />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card-action blue-grey lighten-2">
                                <TaskBoard />
                                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
                                <div id="modal1" className="modal">
                                    <div className="modal-content">
                                        <TaskCreate />
                                    </div>
                                </div>
                            </div> */}
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i
                                    className="material-icons right">close</i></span>

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