import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import { Row, Card, Col, Button, Modal } from "react-bootstrap";

import PageTitle from "../../layouts/PageTitle";
import data from "./data";

import uploadimage from "../../../images/uploadimage.png";
import pause_image from "../../../images/pause_image.png";
import { Col as Column, message, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { api_base_url, requestOptions } from './config'

const moment = require('moment');

class Schedules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedules: [],
            isLoading: true,
            viewAddModal: false,
            day: "Select Day",
            schedule_date: moment(new Date()).format('YYYY-MM-DD'),
            start_time: "08:00",
            end_time: "18:00"
        }
    }

    componentDidMount = () => {
        this.fetchScheduleList()
    }

    fetchScheduleList = () => {
        const options = {
            ...requestOptions,
            body: JSON.stringify({})
        };
        fetch(api_base_url + 'admin/listAllSchedules', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success) {
                    let array = [];
                    res.data.map((item, index) => {
                        let obj = {};
                        obj = {
                            key: (index + 1),
                            id: item.id,
                            day: item.day,
                            schedule_date: moment(item.schedule_date).format('YYYY-MM-DD'),
                            start_time: item.start_time,
                            end_time: item.end_time
                        }
                        array.push(obj)
                    })
                    this.setState({ schedules: array, isLoading: false })
                }
                else {
                    this.setState({ schedules: [], isLoading: false })
                }
            })
            .catch((error) => { })
    }

    handleDeleteSchedule = (id, resolve) => {
        const options = {
            ...requestOptions,
            body: JSON.stringify({ id: id })
        };
        fetch(api_base_url + 'admin/deleteSchedules', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success) {
                    resolve()
                    this.fetchScheduleList()
                }
                else {
                    console.log(res.message)
                }
            })
            .catch((error) => { })
    }

    handleEditSchedule = (newData, resolve) => {
        if (newData.id == '' || newData.day == '' || newData.schedule_date == '' || newData.start_time == '' || newData.end_time == '') {
            alert("All Fields should be fill properly")
            this.fetchScheduleList()
        }
        else {
            const options = {
                ...requestOptions,
                body: JSON.stringify(newData)
            };
            fetch(api_base_url + 'admin/editSchedules', options)
                .then(response => response.json())
                .then((res) => {
                    if (res.success) {
                        resolve()
                        this.fetchScheduleList()
                    }
                    else {
                        console.log(res)
                    }
                })
                .catch((error) => { })
        }
    }

    handleDayAndDateChange = (e) => {
        var d = new Date(e.target.value);
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.setState({ day: days[d.getDay()], schedule_date: e.target.value })
    }

    handleAddSchedule = () => {
        this.setState({ viewAddModal: false })
        const { day, schedule_date, start_time, end_time } = this.state;
        let obj_body = {
            day: day,
            schedule_date: schedule_date,
            start_time: start_time,
            end_time: end_time
        }
        console.log("====> : ", obj_body)
        const options = {
            ...requestOptions,
            body: JSON.stringify(obj_body)
        };
        fetch(api_base_url + 'admin/addSchedules', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success) {
                    this.fetchScheduleList()
                }
                else {
                    console.log(res)
                }
            })
            .catch((error) => { })
    }

    render() {

        const columns = [
            { title: "#", field: 'key' },
            { title: "Day", field: 'day' },
            { title: "Date", field: 'schedule_date' },
            { title: "Start Time", field: 'start_time' },
            { title: "End Time", field: 'end_time' }
        ];

        const new_style = {
            top_margin: { marginTop: '1%', marginLeft: '1%' },
            icons_margin: { marginTop: '1%', marginRight: '1%' },
            label_top_margin: { marginTop: '3%', },
            form_field: { marginLeft: '1%' },
            card_header_color: { backgroundColor: "#00B4E5" },
            center_align: { display: "block", marginLeft: "auto", marginRight: "auto" },
            header_heading: { color: "#FFF", display: "block", marginLeft: "auto", marginRight: "auto" }
        };
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
        const { schedules, isLoading, viewAddModal, schedule_date } = this.state;
        return (
            <Fragment>
                {
                    isLoading ?
                        <Column span={24}>
                            <Spin indicator={antIcon} />
                        </Column>
                        :
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <MaterialTable
                                            title=""
                                            columns={columns}
                                            data={schedules}
                                            options={{
                                                exportButton: true,
                                                search: true,
                                                actionsColumnIndex: -1
                                            }}
                                            editable={{
                                                onRowUpdate: (newData, oldData) =>
                                                    new Promise(resolve => { this.handleEditSchedule(newData, resolve) }),

                                                onRowDelete: oldData =>
                                                    new Promise(resolve => { this.handleDeleteSchedule(oldData.id, resolve) }),
                                            }}
                                            actions={[
                                                {
                                                    icon: "add_box",
                                                    tooltip: "Add Schedule",
                                                    position: "toolbar",
                                                    onClick: () => { this.setState({ viewAddModal: true }) }
                                                }
                                            ]}
                                        />

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                }

                {/* Add New Schedule */}
                <Modal show={viewAddModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Schedule</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="form-group col-md-6">
                            <input type="date" value={schedule_date}
                                onChange={this.handleDayAndDateChange}
                                className="form-control" placeholder="Select Date" />
                        </div>

                        <div className="form-group col-md-6">
                            <input type="time"
                                onChange={(time) => this.setState({ start_time: time.target.value })}
                                className="form-control" placeholder="Start Time" />
                        </div>

                        <div className="form-group col-md-6">
                            <input type="time"
                                onChange={(time) => this.setState({ end_time: time.target.value })}
                                className="form-control" placeholder="End Time" />
                        </div>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.setState({ viewAddModal: false })}>Close</Button>
                        <Button onClick={this.handleAddSchedule}>Add</Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
};

export default Schedules;
