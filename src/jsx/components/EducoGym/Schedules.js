import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";

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
        const { schedules, isLoading } = this.state;
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
                                                    onClick: () => { alert("Under Development") }
                                                }
                                            ]}
                                        />

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                }
            </Fragment>
        );
    }
};

export default Schedules;
