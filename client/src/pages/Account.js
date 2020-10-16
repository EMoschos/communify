import React, { useState, useEffect } from "react";
import CreateTask from "../components/TaskCreate"
import API from "../utils/API"

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
            <div>
                {allTasks.map(data => {
                    return (
                        <div>
                            <div>{data.title}</div>
                            <div>{data.description}</div>
                            <div>{data.taskExpires}</div>
                            <div></div>
                            <div></div>
                        </div>
                    );
                })}
            </div>
            <CreateTask />
        </div>
    );
};

export default Account;