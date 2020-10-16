import React, { useState, useEffect } from "react";
import CreateTask from "../components/TaskCreate"
import API from "../utils/API"
import TaskBoard from "../components/TaskBoard";
import M from 'materialize-css'

const Account = () => {

    const [allTasks, setAllTask] = useState([])

    useEffect(() => {
        API.getTasks().then((res) => {
            console.log("Get All Tasks");
            console.log(res);
            console.log(res.data);
            setAllTask(res.data);
            console.log(allTasks);
        });
    }, []);

    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12">
                        <div className="card sticky-action hoverable">
                            <div className="card-content center waves-effect waves-block waves-light">
                                <img src="https://avatars.dicebear.com/api/avataaars/sarah.svg?options[top][]=shortHair" alt="" className="circle center responsive-img z-depth-5"
                                    height="30%" width="30%" />
                            </div>
                            <div className="card-content blue-grey darken-1">
                                <span className="card-title activator white-text text-darken-4">Card Title<i
                                    className="material-icons right">more_vert</i></span>
                                <p><a href="#" className="white-text">This is a link</a></p>
                            </div>
                            <div className="card-action blue-grey lighten-2">
                                <a href="#">Action Item</a>
                                <a href="#">Action Item</a>
                            </div>
                            <div className="card-action blue-grey lighten-2">
                                <TaskBoard />
                                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
                                <div id="modal1" className="modal">
                                    <div className="modal-content">
                                        <CreateTask />
                                    </div>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i
                                    className="material-icons right">close</i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum neque aut, ipsum
                                rem facilis minima mollitia ipsa, autem ducimus.
                            </p>
                                <div className="row">
                                    <div className="col s12">
                                        <ul className="tabs">
                                            <li className="tab col s6"><a className="active" href="#test1">Test 1</a></li>
                                            <li className="tab col s6"><a href="#test2">Test 2</a></li>
                                        </ul>
                                    </div>
                                    <div id="test1" className="col s12">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Magnam quidem laudantium totam aliquam qui landitiis nobis fugit dignissimos quam!
                                    Inventore incidunt eaque quas sunt dolorum qu</div>
                                    <div id="test2" className="col s12">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Magnam veritatis in autem sint consecteturpedit optio tempora!
                                </div>
                                </div>
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