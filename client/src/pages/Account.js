import React from "react";

const Account = () => {
    return (
        <div className="container">
            <div className="container">

                <h3 className="collegeo"><span className="account-name">USERNAME</span>'s Schoolgle List</h3>
            </div>
            <div className="container" id="list">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Address</th>
                            <th>Sector</th>
                            <th>Year Range</th>
                            <th>Website</th>
                            <th></th>
                        </tr>
                    </thead>
                    <a href=""></a>
                    <tbody>
                        <tr data-lat="{{dataValues.latitude}}" data-long="{{dataValues.longitude}}"
                            data-teachersFTE="{{dataValues.teachingStaffFTE}}" data-enrolmentsFTE="{{dataValues.enrolmentsFTE}}"
                            data-enrolments="{{dataValues.enrolmentsTotal}}">
                            <td>Datata</td>
                            <td>Datata</td>
                            <td>Datata</td>
                            <td>Datata</td>
                            <td><a href="{{dataValues.schoolURL}}" target="_blank">Datata</a></td>
                            <td id="btnIgnore"><a className="waves-effect waves-light btn deleteBtn" data-id="{{dataValues.id}}"><i
                                className="material-icons">delete_forever</i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Account;