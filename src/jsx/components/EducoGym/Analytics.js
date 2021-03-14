import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

import "react-calendar/dist/Calendar.css";
import { Dropdown } from "react-bootstrap";

import loadable from "@loadable/component";
import { Row, Col, Card } from "react-bootstrap";
import pMinDelay from "p-min-delay";
const ApexLine3 = loadable(() => pMinDelay(import("./Line3"), 500));



const Analytics = () => {
    const [value, onChange] = useState(new Date());
    const [addPlan, setAddPlan] = useState(false);
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-xl-3 col-xxl-4">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card flex-xl-column flex-sm-row flex-column">
                                <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                                    <Calendar onChange={onChange} value={value} />
                                </div>
                                <div className="card-body col-md-6 col-lg-6 col-lg-12">
                                    <h6 className="fs-16 text-black mb-4"> Total Count </h6>
                                    <div className="d-flex mb-4 align-items-center">
                                        <span className="date-icon mr-3">500</span>
                                        <div>
                                            <h6 className="fs-16">
                                                <Link to="/workout-statistic" className="text-black"> All Slots </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4 align-items-center">
                                        <span className="date-icon mr-3">320</span>
                                        <div>
                                            <h6 className="fs-16">
                                                <Link to="/workout-statistic" className="text-black"> Booked Slots </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4 align-items-center">
                                        <span className="date-icon mr-3">150</span>
                                        <div>
                                            <h6 className="fs-16">
                                                <Link to="/workout-statistic" className="text-black"> Full Slots </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4 align-items-center">
                                        <span className="date-icon mr-3">130</span>
                                        <div>
                                            <h6 className="fs-16">
                                                <Link to="/workout-statistic" className="text-black"> Empty Slots </Link>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4 align-items-center">
                                        <span className="date-icon mr-3">500</span>
                                        <div>
                                            <h6 className="fs-16">
                                                <Link to="/workout-statistic" className="text-black"> Blocked Slots </Link>
                                            </h6>
                                        </div>
                                    </div>

                                </div>
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
            </div>
        </React.Fragment>
    );
};

export default Analytics;
