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

    // useEffect(() => {
    //     setUpdateUser(
    //         {
    //         userID: user._id,
    //         firstName: user.firstName,
    //         lastName: user.lastName,
    //         address: user.address,
    //         skills: user.skills,
    //         experience: user.experience
    //     }
    //     )
    //     console.log("Running use Effect")
    //     console.log(user)
    // }, [])

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
                    M.toast({ html: "Successful update of task" });
                    updateContextTasks()
                } else {
                    console.log("Some error ocurred");
                }
            })
                .catch(err => {
                    console.log(err);
                });
        } else {
            console.log('Please enter valid username and password')
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
                            placeholder="i.e. John"
                            id="firstName"
                            type="text"
                            className="validate"
                            value={updateUser.firstName}
                            onChange={handleChange}
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="i.e. Smith"
                            id="lastName"
                            type="text"
                            className="validate"
                            value={updateUser.lastName}
                            onChange={handleChange}
                        />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="57, Example drive, Sometown, Some State"
                            id="address"
                            type="text"
                            className="validate"
                            value={updateUser.address}
                            onChange={handleChange}
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Wood work, carpentary"
                            id="skills"
                            type="text"
                            className="validate"
                            value={updateUser.skills}
                            onChange={handleChange}
                        />
                        <label htmlFor="skills">Skills</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Worked at Joe's builders"
                            id="experience"
                            type="text"
                            className="validate"
                            value={updateUser.experience}
                            onChange={handleChange}
                        />
                        <label htmlFor="experience">Experience</label>
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