import React, { useState } from "react";
import { Col, message, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

/// Layout
import Nav from "../../layouts/nav";
import Footer from "../../layouts/Footer";

import { api_base_url, axios_config, method_post, requestOptions } from './config'

//** Import Image */
import profile from "../../../images/profile/profile.png";
import { Dropdown } from "react-bootstrap";

class AppProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_data: {},
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchAboutUs()
    }

    fetchAboutUs() {
        const options = {
            ...requestOptions,
            body: JSON.stringify({ id: '1' })
        };
        fetch(api_base_url + 'admin/userProfile', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success) {
                    // message.success(res.message)
                    this.setState({ profile_data: res.data, isLoading: false })
                }
                else {
                    // alert(res.message)
                    this.setState({ profile_data: {}, isLoading: false })
                }
            })
            .catch((error) => {
                // alert(error)
            })
    }

    render() {
        const { profile_data, isLoading } = this.state;
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
        return (
            <div id="main-wrapper" className="show">
                <Nav />
                <div className="content-body">
                    <div className="container-fluid">
                        <>
                            {isLoading ?
                                <Col span={24}>
                                    <Spin indicator={antIcon} />
                                </Col>
                                :
                                <>
                                    {
                                        profile_data.email ?
                                            <>
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
                                                                            <h4 className="text-primary mb-0"> {profile_data.first_name} {profile_data.last_name}</h4>
                                                                            <p>Admin</p>
                                                                        </div>
                                                                        <div className="profile-email px-2 pt-2">
                                                                            <h4 className="text-muted mb-0">{profile_data.email} </h4>
                                                                            <p>Email</p>
                                                                        </div>
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
                                                                                    <td className="text-left">{profile_data.first_name} {profile_data.last_name}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-left font-weight-bold">Email</td>
                                                                                    <td className="text-center font-weight-bold">:</td>
                                                                                    <td className="text-left">{profile_data.email}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-left font-weight-bold">Gender</td>
                                                                                    <td className="text-center font-weight-bold">:</td>
                                                                                    <td className="text-left">{profile_data.gender}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-left font-weight-bold">Age</td>
                                                                                    <td className="text-center font-weight-bold">:</td>
                                                                                    <td className="text-left">{profile_data.age}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <h2 className="text-primary mb-0" style={new_style.top_margin}> About Me </h2>
                                                                        <p style={new_style.top_margin}>{profile_data.about_text}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                                                <h2 className="text-primary mb-0" style={new_style.top_margin}> No record found </h2>
                                            </div>
                                    }
                                </>}
                        </>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

const new_style = {
    top_margin: {
        marginTop: '1%',
        marginLeft: '1%'
    }
};

export default AppProfile;
