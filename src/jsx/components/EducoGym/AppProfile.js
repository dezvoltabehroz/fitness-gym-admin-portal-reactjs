import React, { Fragment, useState } from "react";

//** Import Image */
import profile from "../../../images/profile/profile.png";
import { Dropdown } from "react-bootstrap";

const AppProfile = () => {

    const new_style = {
        top_margin: {
            marginTop: '1%',
            marginLeft: '1%'
        }
    };

    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-12">
                    <div className="profile card card-body px-3 pt-3 pb-0">
                        <div className="profile-head">
                            <div className="photo-content">
                                <div className="cover-photo"></div>
                            </div>
                            <div className="profile-info">
                                <div className="profile-photo">
                                    <img
                                        src={profile}
                                        className="img-fluid rounded-circle"
                                        alt="profile"
                                    />
                                </div>
                                <div className="profile-details">
                                    <div className="profile-name px-3 pt-2">
                                        <h4 className="text-primary mb-0"> Mitchell C. Shay</h4>
                                        <p>Admin</p>
                                    </div>
                                    <div className="profile-email px-2 pt-2">
                                        <h4 className="text-muted mb-0">admin_email@example.com </h4>
                                        <p>Email</p>
                                    </div>
                                    <Dropdown className="dropdown ml-auto">
                                        <Dropdown.Toggle variant="primary" className="btn btn-primary light sharp icon-false" data-toggle="dropdown" aria-expanded="true"                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1" >
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
                                                    <rect x="0" y="0" width="24" height="24" ></rect>
                                                    <circle fill="#000000" cx="5" cy="12" r="2" ></circle>
                                                    <circle fill="#000000" cx="12" cy="12" r="2" ></circle>
                                                    <circle fill="#000000" cx="19" cy="12" r="2" ></circle>
                                                </g>
                                            </svg>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                            <Dropdown.Item className="dropdown-item"> Edit </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item"> Sign Out </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-primary mb-0" style={new_style.top_margin}> Personal Information </h2>
                            <div className="row">
                                <div className="col-xl-4">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="text-left font-weight-bold">Name</td>
                                                <td className="text-center font-weight-bold">:</td>
                                                <td className="text-left">John Doe</td>
                                            </tr>
                                            <tr>
                                                <td className="text-left font-weight-bold">Email</td>
                                                <td className="text-center font-weight-bold">:</td>
                                                <td className="text-left">admin_email@example.com</td>
                                            </tr>
                                            <tr>
                                                <td className="text-left font-weight-bold">Gender</td>
                                                <td className="text-center font-weight-bold">:</td>
                                                <td className="text-left">Male</td>
                                            </tr>
                                            <tr>
                                                <td className="text-left font-weight-bold">Age</td>
                                                <td className="text-center font-weight-bold">:</td>
                                                <td className="text-left">27</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <h2 className="text-primary mb-0" style={new_style.top_margin}> About Me </h2>
                                    <p style={new_style.top_margin}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AppProfile;
