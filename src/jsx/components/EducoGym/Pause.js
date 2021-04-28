import React, { } from "react";
import { Row, Card, Col, Button, Modal } from "react-bootstrap";

/// Layout
import Nav from "../../layouts/nav";
import Footer from "../../layouts/Footer";

import { Col as Column, message, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { api_base_url, requestOptions } from './config'

const moment = require('moment');

class Pause extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pause: [],
            isLoading: true
        }
    }

    componentDidMount = () => {
        this.fetchScheduleList()
    }

    fetchScheduleList = () => {
        const options = { ...requestOptions, body: JSON.stringify({}) };
        fetch(api_base_url + 'admin/pendingPauseList', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success)
                    this.setState({ pause: res.data, isLoading: false })
                else
                    this.setState({ pause: [], isLoading: false })
            })
            .catch((error) => { })
    }

    approveRequest(pause_id) {
        this.setState({ isLoading: true })
        const options = { ...requestOptions, body: JSON.stringify({ "pause_id": pause_id }) };
        fetch(api_base_url + 'admin/acceptPendingRequest', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success)
                    this.fetchScheduleList()
                else
                    this.fetchScheduleList()
            })
            .catch((error) => { })
    }

    cancelRequest(pause_id) {
        this.setState({ isLoading: true })
        const options = { ...requestOptions, body: JSON.stringify({ "pause_id": pause_id }) };
        fetch(api_base_url + 'admin/cancelPendingRequest', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success)
                    this.fetchScheduleList()
                else
                    this.fetchScheduleList()
            })
            .catch((error) => { })
    }

    render() {

        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
        const { pause, isLoading } = this.state;
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
                                    <Row gutter={16}>
                                        {
                                            pause.length > 0 ?
                                                <>
                                                    {
                                                        pause.map((data) => {
                                                            return (
                                                                <Col span={6}>
                                                                    <Card style={{ width: '18rem' }}>
                                                                        <Card.Body>
                                                                            <Card.Title> {data.full_name} </Card.Title>
                                                                            <Card.Text> <b>Start : </b>{moment(data.pause_start).format('yyyy/MM/DD')} </Card.Text>
                                                                            <Card.Text> <b>End : </b>{moment(data.pause_end).format('yyyy/MM/DD')} </Card.Text>
                                                                            <Button size="sm" variant="primary" onClick={() => this.approveRequest(data.pause_id)}>Approved</Button>
                                                                            <Button size="sm" variant="danger" onClick={() => this.cancelRequest(data.pause_id)}>Cancel</Button>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                            )
                                                        })
                                                    }
                                                </>
                                                :
                                                <div className="card-body">
                                                    <div className="d-flex p-3 list-row flex-wrap align-items-center justify-content-between">
                                                        <div className="booking-slot flex-grow-1">
                                                            <div className="d-flex align-items-center">
                                                                <p className="fs-24 text-primary mb-0">No Record Found :(</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        }

                                    </Row>
                            }

                        </>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Pause;