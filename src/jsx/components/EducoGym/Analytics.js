import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

import "react-calendar/dist/Calendar.css";
import { Dropdown } from "react-bootstrap";

import loadable from "@loadable/component";
import { Row, Col, Card } from "react-bootstrap";
import pMinDelay from "p-min-delay";

/// Layout
import Nav from "../../layouts/nav";
import Footer from "../../layouts/Footer";

import { Col as Column, message, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { api_base_url, requestOptions } from './config'

const moment = require('moment');

const ApexLine3 = loadable(() => pMinDelay(import("./Line3"), 500));

class Analytics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date(),
            isloading: true,
            analytics_detail: {},
            addPlan: false
        }
    }

    componentDidMount() {
        // console.log("moment(this.state.value).format('YYYY-MM-DD') : ", moment(this.state.value).format('YYYY-MM-DD'))
        this.fetchAnalytics(moment(this.state.value).format('YYYY-MM-DD'))
    }

    fetchAnalytics(date) {
        const options = {
            ...requestOptions,
            body: JSON.stringify({ date: date })
        };
        fetch(api_base_url + 'admin/analytics', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success) {
                    // console.log("res.data : ", res.data)
                    // message.success(res.message)
                    this.setState({ analytics_detail: res.data, isLoading: false })
                }
                else {
                    // alert(res.message)
                    this.setState({ analytics_detail: {}, isLoading: false })
                }
            })
            .catch((error) => {
                // alert(error)
            })
    }

    handleDate = (date) => {
        this.setState({ value: date })
        this.fetchAnalytics(moment(date).format('YYYY-MM-DD'))
    }

    render() {
        const { analytics_detail, isLoading, value } = this.state;
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
        return (
            <div id="main-wrapper" className="show">
                <Nav />
                <div className="content-body">
                    <div className="container-fluid">
                        <>
                            {
                                isLoading ?
                                    <Column span={24}>
                                        <Spin indicator={antIcon} />
                                    </Column>
                                    :
                                    <div className="row">

                                        <>
                                            <div className="col-xl-3 col-xxl-4">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="card flex-xl-column flex-sm-row flex-column">
                                                            <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                                                                <Calendar onChange={(value) => this.handleDate(value)} value={value} />
                                                            </div>
                                                            {
                                                                analytics_detail.all_slots == undefined ?
                                                                    <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                                                                        <h2 className="text-primary mb-0" style={new_style.top_margin}> No record found </h2>
                                                                    </div>
                                                                    :
                                                                    <div className="card-body col-md-6 col-lg-6 col-lg-12">
                                                                        <h6 className="fs-16 text-black mb-4"> Total Count </h6>
                                                                        <div className="d-flex mb-4 align-items-center">
                                                                            <span className="date-icon mr-3">{analytics_detail.all_slots}</span>
                                                                            <div>
                                                                                <h6 className="fs-16">
                                                                                    <Link to="/workout-statistic" className="text-black"> All Slots </Link>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex mb-4 align-items-center">
                                                                            <span className="date-icon mr-3">{analytics_detail.booked_slots}</span>
                                                                            <div>
                                                                                <h6 className="fs-16">
                                                                                    <Link to="/workout-statistic" className="text-black"> Booked Slots </Link>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex mb-4 align-items-center">
                                                                            <span className="date-icon mr-3">{analytics_detail.full_slots}</span>
                                                                            <div>
                                                                                <h6 className="fs-16">
                                                                                    <Link to="/workout-statistic" className="text-black"> Full Slots </Link>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex mb-4 align-items-center">
                                                                            <span className="date-icon mr-3">{analytics_detail.empty_slots}</span>
                                                                            <div>
                                                                                <h6 className="fs-16">
                                                                                    <Link to="/workout-statistic" className="text-black"> Empty Slots </Link>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex mb-4 align-items-center">
                                                                            <span className="date-icon mr-3">{analytics_detail.booked_slots}</span>
                                                                            <div>
                                                                                <h6 className="fs-16">
                                                                                    <Link to="/workout-statistic" className="text-black"> Blocked Slots </Link>
                                                                                </h6>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-9 col-xxl-8">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="card plan-list">
                                                            <div className="card-header d-sm-flex d-block pb-0 border-0">
                                                                <div className="mr-auto pr-3">
                                                                    <div className="d-flex mb-4 align-items-center">
                                                                        <span className="date-icon mr-3"><FontAwesomeIcon icon={faDumbbell} /></span>
                                                                        <div>
                                                                            <h1 className="text-black fs-20">Booking Details</h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Dropdown className="mt-sm-0 mt-3">
                                                                    <Dropdown.Toggle
                                                                        variant=""
                                                                        as="button"
                                                                        className="btn rounded border text-black border-light dropdown-toggle">
                                                                        Today
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu-right">
                                                                        <Dropdown.Item>Today</Dropdown.Item>
                                                                        <Dropdown.Item>Weekly</Dropdown.Item>
                                                                        <Dropdown.Item>Monthly</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="card-body">
                                                                <Row>
                                                                    <Col xl={12}>
                                                                        <Card>
                                                                            <Card.Body>
                                                                                <ApexLine3 />
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>

                                    </div>
                            }
                        </>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};
const new_style = {
    top_margin: {
        marginTop: '1%',
        marginLeft: '5%'
    }
};

export default Analytics;
