import React, { useState } from "react";
import { Col, message, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import { api_base_url, axios_config } from './config'

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutus_data: {},
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchAboutUs()
    }

    fetchAboutUs() {
        fetch(api_base_url + 'profile/aboutUs', axios_config)
            .then(response => response.json())
            .then((res) => {
                if (res.success) {
                    // message.success(res.message)
                    this.setState({ aboutus_data: res.data, isLoading: false })
                }
                else {
                    // alert(res.message)
                    this.setState({ aboutus_data: {}, isLoading: false })
                }
            })
            .catch((error) => {
                // alert(error)
            })
    }

    render() {
        const { aboutus_data, isLoading } = this.state;
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

        return (

            <React.Fragment>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card flex-xl-column flex-sm-row flex-column">
                            {isLoading ?
                                <Col span={24}>
                                    <Spin indicator={antIcon} />
                                </Col>
                                :
                                <>
                                    {aboutus_data !== {} ?
                                        <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                                            <h2 className="text-primary mb-0" style={new_style.top_margin}> How we work? </h2>
                                            <p style={new_style.top_margin}> {aboutus_data.content} </p>
                                            <h2 className="text-primary mb-0" style={new_style.top_margin}> Contact Us </h2>
                                            <p style={new_style.top_margin}>
                                                <ul>
                                                    <li> <i className="fa fa-globe fa-2x" style={new_style.icons_margin}></i> {aboutus_data.website} </li>
                                                    <li> <i className="fa fa-phone fa-2x" style={new_style.icons_margin}></i> {aboutus_data.phone} </li>
                                                    <li> <i className="fa fa-map-marker fa-2x" style={new_style.icons_margin}></i> {aboutus_data.city_country} </li>
                                                </ul>
                                            </p>
                                            <h2 className="text-primary mb-0" style={new_style.top_margin}> Follow Us </h2>
                                            <p style={new_style.top_margin}>
                                                <ul>
                                                    <li> <i className="fa fa-whatsapp fa-2x" style={new_style.icons_margin}></i> {aboutus_data.whatsapp} </li>
                                                    <li> <i className="fa fa-instagram fa-2x" style={new_style.icons_margin}></i> {aboutus_data.instagram} </li>
                                                    <li> <i className="fa fa-facebook-official fa-2x" style={new_style.icons_margin}></i> {aboutus_data.facebook} </li>
                                                </ul>
                                            </p>
                                            <h2 className="text-primary mb-0" style={new_style.top_margin}> Developed By </h2>
                                            <p style={new_style.top_margin}>{aboutus_data.developed_by}</p>
                                        </div>
                                        :
                                        <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                                            <h2 className="text-primary mb-0" style={new_style.top_margin}> No record found </h2>
                                        </div>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

const new_style = {
    top_margin: {
        marginTop: '1%',
        marginLeft: '1%'
    },
    icons_margin: {
        marginTop: '1%',
        marginRight: '1%'
    }
};

export default AboutUs;
