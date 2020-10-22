import React, { useState, useContext, useEffect } from "react";
import API from "../../utils/API"
import UserContext from "../../utils/UserContext"
import M from 'materialize-css'
import FuncContext from "../../utils/FuncContext"

function UpdateUser() {
    const updateContextTasks = useContext(FuncContext)
    const user = useContext(UserContext)

    const [updateUser, setUpdateUser] = useState(
        {
            // userID: "",
            // firstName: props.firstName,
            // lastName: "",
            // address: "",
            // skills: [],
            // experience: []
        }
    )

    const captureUserData = (e) => {
        e.preventDefault()
        let currentUserData = user
        console.log(currentUserData)
        setUpdateUser(currentUserData)
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setUpdateUser(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        if (updateUser.firstName && updateUser.lastName && updateUser.address) {
            const id = user._id;
            const userChanges = {
                "firstName": updateUser.firstName,
                "lastName": updateUser.lastName,
                "address": updateUser.address,
                "skills": updateUser.skills.split(","),
                "experience": updateUser.experience.split(",")
            }
            console.log(id)
            API.userUpdate(id, userChanges).then(res => {
                if (res.status === 200) {
                    console.log("Successful update of User");
                    M.toast({ html: "Successful update of User"});
                    updateContextTasks()
                } else {
                    console.log("Some error ocurred");
                    M.toast({ html: "Did not update server error occurred"});
                }
            })
                .catch(err => {
                    console.log(err);
                    M.toast({ html: "Did not update server error occurred or invalid inputs"});
                });
        } else {
            console.log("Please enter valid username and password")
            M.toast({ html: "Please enter valid inputs"});
        }

    }

    return (
        <div className="row">
            <form className="col s12">
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={captureUserData}>Populate User Info
          <i className="material-icons right">get_app</i>
                </button>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            placeholder="First Name: e.g. John"
                            id="firstName"
                            type="text"
                            className="validate"
                            value={updateUser.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Last Name: e.g. Smith"
                            id="lastName"
                            type="text"
                            className="validate"
                            value={updateUser.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Address: e.g. 57, Example drive, Sometown, Some State"
                            id="address"
                            type="text"
                            className="validate"
                            value={updateUser.address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Skills: e.g Wood work, carpentary"
                            id="skills"
                            type="text"
                            className="validate"
                            value={updateUser.skills}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Experience: e.g. Worked at Joe's builders"
                            id="experience"
                            type="text"
                            className="validate"
                            value={updateUser.experience}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleUpdate}>Submit
          <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateUser;