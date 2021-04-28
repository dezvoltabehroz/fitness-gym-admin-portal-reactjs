import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import PageTitle from "../../layouts/PageTitle";

import uploadimage from "../../../images/uploadimage.png";
import { api_base_url, requestOptions } from './config'

import { message } from "antd";

const moment = require('moment');

class AddTrainee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            isBack: false,
            gender: 'Male',
            answers_list: [
                { "question_id": "1", "answer": "" },
                { "question_id": "2", "answer": "Yes" },
                { "question_id": "3", "answer": "Yes" },
                { "question_id": "4", "answer": "Yes" },
                { "question_id": "5", "answer": "Yes" },
                { "question_id": "6", "answer": "Yes" },
                { "question_id": "7", "answer": "Yes" },
                { "question_id": "8", "answer": "Yes" },
                { "question_id": "9", "answer": "Yes" },
                { "question_id": "10", "answer": "Yes" },
                { "question_id": "11", "answer": "Yes" },
                { "question_id": "12", "answer": "Yes" },
                { "question_id": "13", "answer": "Yes" },
                { "question_id": "14", "answer": "Yes" },
                { "question_id": "15", "answer": "Yes" },
                { "question_id": "16", "answer": "Yes" },
                { "question_id": "17", "answer": "Yes" },
                { "question_id": "18", "answer": "" },
                { "question_id": "19", "answer": "" },
                { "question_id": "20", "answer": "" },
                { "question_id": "21", "answer": "" },
                { "question_id": "22", "answer": "" },
                { "question_id": "23", "answer": "" },
                { "question_id": "24", "answer": "yes" },
                { "question_id": "25", "answer": "yes" },
                { "question_id": "26", "answer": "" },
                { "question_id": "27", "answer": "" },
                { "question_id": "28", "answer": "" },
                { "question_id": "29", "answer": "Yes" },
                { "question_id": "30", "answer": "" },
                { "question_id": "31", "answer": "" },
                { "question_id": "32", "answer": "" }
            ],
            first_name: "",
            last_name: "",
            age: "",
            dob: "",
            contact_numner: "",
            emergency_number: "",
            email: "",
            address: "",
            memberShip_type: "Basic"
        }
    }

    handleAddTrainee = () => {
        const { first_name, last_name, age, email, dob, contact_numner, emergency_number, address, memberShip_type, gender, answers_list } = this.state;
        console.log({
            "first_name": first_name,
            "last_name": last_name,
            "age": age,
            "dob": moment(dob).format('YYYY-MM-DD'),
            "phone": contact_numner,
            "emergency_num": emergency_number,
            "email": email,
            "address": address,
            "gender": gender,
            "membership_type": memberShip_type,
            "answers_list": answers_list
        })
        const options = {
            ...requestOptions,
            body: JSON.stringify({
                "first_name": first_name,
                "last_name": last_name,
                "age": age,
                "dob": moment(dob).format('YYYY-MM-DD'),
                "phone": contact_numner,
                "emergency_num": emergency_number,
                "email": email,
                "address": address,
                "gender": gender,
                "membership_type": memberShip_type,
                "answers_list": answers_list
            })
        };
        fetch(api_base_url + 'admin/addUser', options)
            .then(response => response.json())
            .then((res) => {
                if (res.success) {
                    console.log(res)
                    // message.success(res.message)
                    this.props.history.push("/trainee-details");
                }
                else {
                    console.log(res)
                    // alert(res.message)
                }
            })
            .catch((error) => {
                console.log(error)
                // alert(error)
            })
    }

    completedStep1 = () => {
        const { first_name, last_name, age, dob, contact_numner, emergency_number, memberShip_type, gender, address } = this.state;
        if (first_name.length && last_name.length && age.length && dob.length && contact_numner.length && emergency_number.length && memberShip_type.length && gender.length && address.length) {
            this.setState({
                step1: false,
                step2: true,
                step3: false,
                step4: false,
                isBack: false,
               
            })
        }
        else {
            console.log("Please fill all the fields")
            alert("Please fill all the fields")
        }

    }
    completedStep2 = () => {
        this.setState({
            step1: false,
            step2: false,
            step3: true,
            step4: false,
            isBack: false
        })
    }
    completedStep3 = () => {
        const { answers_list } = this.state;
        if (answers_list[17].answer != "" && answers_list[18].answer != "" && answers_list[19].answer != "" && answers_list[20].answer != "" && answers_list[21].answer != "" && answers_list[22].answer != "") {
            this.setState({
                step1: false,
                step2: false,
                step3: false,
                step4: true,
                isBack: false
            })
        }
        else {
            console.log("Please fill all the fields")
            // alert("Please fill the fields");
        }


    }
    completedStep4 = () => {
        this.setState({
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            isBack: true,
            gender: 'Male',
            answers_list: [
                { "question_id": "1", "answer": "" },
                { "question_id": "2", "answer": "Yes" },
                { "question_id": "3", "answer": "Yes" },
                { "question_id": "4", "answer": "Yes" },
                { "question_id": "5", "answer": "Yes" },
                { "question_id": "6", "answer": "Yes" },
                { "question_id": "7", "answer": "Yes" },
                { "question_id": "8", "answer": "Yes" },
                { "question_id": "9", "answer": "Yes" },
                { "question_id": "10", "answer": "Yes" },
                { "question_id": "11", "answer": "Yes" },
                { "question_id": "12", "answer": "Yes" },
                { "question_id": "13", "answer": "Yes" },
                { "question_id": "14", "answer": "Yes" },
                { "question_id": "15", "answer": "Yes" },
                { "question_id": "16", "answer": "Yes" },
                { "question_id": "17", "answer": "Yes" },
                { "question_id": "18", "answer": "" },
                { "question_id": "19", "answer": "" },
                { "question_id": "20", "answer": "" },
                { "question_id": "21", "answer": "" },
                { "question_id": "22", "answer": "" },
                { "question_id": "23", "answer": "" },
                { "question_id": "24", "answer": "yes" },
                { "question_id": "25", "answer": "yes" },
                { "question_id": "26", "answer": "" },
                { "question_id": "27", "answer": "" },
                { "question_id": "28", "answer": "" },
                { "question_id": "29", "answer": "Yes" },
                { "question_id": "30", "answer": "" },
                { "question_id": "31", "answer": "" },
                { "question_id": "32", "answer": "" }
            ],
            first_name: "",
            last_name: "",
            age: "",
            dob: "",
            contact_numner: "",
            emergency_number: "",
            email: "",
            address: "",
            memberShip_type: "Basic"
        })
    }

    // Back Button handles
    handleBack4 = () => {
        this.setState({
            step1: false,
            step2: false,
            step3: true,
            step4: false,
            isBack: true
        })
    }
    handleBack3 = () => {
        this.setState({
            step1: false,
            step2: true,
            step3: false,
            step4: false,
            isBack: true
        })
    }
    handleBack2 = () => {
        this.setState({
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            isBack: false
        })
    }

    handleUploadImgae = () => {
        console.log("=========== Button Pressed ===========")
    }

    addValueInArray = (question_id, answer) => {
        const { answers_list } = this.state;
        let array = [...answers_list];
        let tempJson = { "question_id": question_id, "answer": answer }
        let objIndex = array.findIndex(item => item.question_id == question_id);
        if (objIndex == -1)
            array.push(tempJson)
        else {
            array[objIndex] = tempJson
        }
        this.setState({ answers_list: array });
        console.log("answers_list : ", array);
    }

    render() {
        const { step1, step2, step3, step4, isBack, gender, memberShip_type, contact_numner, email, address, emergency_number, age, dob, first_name, last_name, answers_list } = this.state;
        return (
            <Fragment>
                <PageTitle activeMenu="Add Trainee" motherMenu="Trainee" />
                {step1 == true ?
                    <>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-primary mb-0" style={new_style.top_margin}> About </h4>
                                        <div className="row">

                                            <div className="col-xl-6 col-lg-12">
                                                <div className="basic-form">
                                                    <div className="form-row d-flex justify-content-center">
                                                        <div className="form-group col-md-6">
                                                            <img src={uploadimage} data-holder-rendered="true" onClick={() => this.handleUploadImgae()} />
                                                            <br />
                                                            <input type="file" className="filetype" id="group_image" style={new_style.label_top_margin} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-12">
                                                <div className="basic-form">
                                                    <form onSubmit={(e) => e.preventDefault()}>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <input type="text" onChange={(e) => this.setState({ first_name: e.target.value })} value={first_name} className="form-control border-bottom" placeholder="First Name" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="text" onChange={(e) => this.setState({ last_name: e.target.value })} value={last_name} className="form-control" placeholder="Last Name" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="tel" onChange={(e) => this.setState({ age: e.target.value })} value={age} className="form-control" placeholder="Age" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="date" onChange={(e) => this.setState({ dob: e.target.value })} value={dob} className="form-control" placeholder="DOB" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="tel" onChange={(e) => this.setState({ contact_numner: e.target.value })} value={contact_numner} className="form-control" placeholder="Contact Number" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="tel" onChange={(e) => this.setState({ emergency_number: e.target.value })} value={emergency_number} className="form-control" placeholder="Emergency Number" />
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <input type="email" onChange={(e) => this.setState({ email: e.target.value })} value={email} className="form-control" placeholder="Email" />
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <input type="text" onChange={(e) => this.setState({ address: e.target.value })} value={address} className="form-control" placeholder="Address" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-primary mb-0" style={new_style.top_margin}> Membership Details </h4><br />
                                        <div className="form-group col-md-6">
                                            <label>Type of membership?</label>
                                            <div className="col-sm-9">
                                                <div className="form-check">
                                                    <input className="form-check-input" onChange={event => { this.setState({ memberShip_type: event.target.value }) }} type="radio" name="memberShip_type" value="Basic" checked={memberShip_type == 'Basic' ? true : false} />
                                                    <label className="form-check-label"> Basic </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" onChange={event => { this.setState({ memberShip_type: event.target.value }) }} type="radio" name="memberShip_type" value="Standard" checked={memberShip_type == 'Standard' ? true : false} />
                                                    <label className="form-check-label"> Standard</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-primary mb-0" style={new_style.top_margin}> General Info </h4>
                                        <h6 className="" style={new_style.top_margin}> Please can you fill in the detail below: </h6><br />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>What is your Sex?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.setState({ gender: event.target.value }) }} type="radio" name="gridRadiosgender" value='Male' checked={gender == 'Male' ? true : false} />
                                                            <label className="form-check-label"> Male </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.setState({ gender: event.target.value }) }} type="radio" name="gridRadiosgender" value='Female' checked={gender == 'Female' ? true : false} />
                                                            <label className="form-check-label"> Female</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Where did you hear about us?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("1", event.target.value) }} type="radio" name="gridRadios1" value="Returning Client" checked={answers_list[0].answer == "Returning Client" ? true : false} />
                                                            <label className="form-check-label"> Returning Client </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("1", event.target.value) }} type="radio" name="gridRadios1" value="From a friend" checked={answers_list[0].answer == "From a friend" ? true : false} />
                                                            <label className="form-check-label"> From a friend</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("1", event.target.value) }} type="radio" name="gridRadios1" value="Instagram" checked={answers_list[0].answer == "Instagram" ? true : false} />
                                                            <label className="form-check-label"> Instagram</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("1", event.target.value) }} type="radio" name="gridRadios1" value="Facebook" checked={answers_list[0].answer == "Facebook" ? true : false} />
                                                            <label className="form-check-label"> Facebook</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("1", event.target.value) }} type="radio" name="gridRadios1" value="Google" checked={answers_list[0].answer == "Google" ? true : false} />
                                                            <label className="form-check-label"> Google</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("1", event.target.value) }} type="radio" name="gridRadios1" value="Talk / Presentation" checked={answers_list[0].answer == "Talk / Presentation" ? true : false} />
                                                            <label className="form-check-label"> Talk / Presentation</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("1", event.target.value) }} type="radio" name="gridRadios1" value="Other" checked={answers_list[0].answer == "Other" ? true : false} />
                                                            <label className="form-check-label"> Other : </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you explained chest pain on exercise recently?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("2", event.target.value) }} type="radio" name="gridRadios2" value="Yes" checked={answers_list[1].answer == "Yes" ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("2", event.target.value) }} type="radio" name="gridRadios2" value="No" checked={answers_list[1].answer == "No" ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Do you experience breathlessness in normal activity?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("3", event.target.value) }} type="radio" name="gridRadios3" value="Yes" checked={answers_list[2].answer == "Yes" ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("3", event.target.value) }} type="radio" name="gridRadios3" value="No" checked={answers_list[2].answer == "No" ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you had any recent operations?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("4", event.target.value) }} type="radio" name="gridRadios4" value="Yes" checked={answers_list[3].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("4", event.target.value) }} type="radio" name="gridRadios4" value="No" checked={answers_list[3].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you any joint condition, injuries or aches and pains?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("5", event.target.value) }} type="radio" name="gridRadios5" value="Yes" checked={answers_list[4].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("5", event.target.value) }} type="radio" name="gridRadios5" value="No" checked={answers_list[4].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Are you taking prescribed medication?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("6", event.target.value) }} type="radio" name="gridRadios6" value="Yes" checked={answers_list[5].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={event => { this.addValueInArray("6", event.target.value) }} type="radio" name="gridRadios6" value="No" checked={answers_list[5].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Do you have a heart condition?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("7", event.target.value)} type="radio" name="gridRadios7" value="Yes" checked={answers_list[6].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("7", event.target.value)} type="radio" name="gridRadios7" value="No" checked={answers_list[6].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Do you have asthma?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("8", event.target.value)} type="radio" name="gridRadios8" value="Yes" checked={answers_list[7].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("8", event.target.value)} type="radio" name="gridRadios8" value="No" checked={answers_list[7].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Are you diabetic?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("9", event.target.value)} type="radio" name="gridRadios9" value="Yes" checked={answers_list[8].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("9", event.target.value)} type="radio" name="gridRadios9" value="No" checked={answers_list[8].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you been diagnosed with high cholesterol?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("10", event.target.value)} type="radio" name="gridRadios10" value="Yes" checked={answers_list[9].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("10", event.target.value)} type="radio" name="gridRadios10" value="No" checked={answers_list[9].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you been diagnosed with high blood pressure?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("11", event.target.value)} type="radio" name="gridRadios11" value="Yes" checked={answers_list[10].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("11", event.target.value)} type="radio" name="gridRadios11" value="No" checked={answers_list[10].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Are you now, or have you recently been pregnant? (Ladies)</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("12", event.target.value)} type="radio" name="gridRadios12" value="Yes" checked={answers_list[11].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("12", event.target.value)} type="radio" name="gridRadios12" value="No" checked={answers_list[11].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you experienced dizziness or light-headedness recently?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("13", event.target.value)} type="radio" name="gridRadios13" value="Yes" checked={answers_list[12].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("13", event.target.value)} type="radio" name="gridRadios13" value="No" checked={answers_list[12].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you been diagnosed with anemia or iron deficiency lately?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("14", event.target.value)} type="radio" name="gridRadios14" value="Yes" checked={answers_list[13].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(event) => this.addValueInArray("14", event.target.value)} type="radio" name="gridRadios14" value="No" checked={answers_list[13].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label>I confirm that to my knowledge I am in good health to participate in intensive personal training and that I have disclosed all health information which might be relevant to such an activity.</label>
                                                <div className="col-sm-9">
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={(event) => this.addValueInArray("15", event.target.value)} type="radio" name="gridRadios15" value="Yes" checked={answers_list[14].answer == 'Yes' ? true : false} />
                                                        <label className="form-check-label"> Yes </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={(event) => this.addValueInArray("15", event.target.value)} type="radio" name="gridRadios15" value="No" checked={answers_list[14].answer == 'No' ? true : false} />
                                                        <label className="form-check-label"> No</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label>Please note that by submitting this form you agree the following: 1. This is an intense program designed to achieve rapid and exceptional results. While we will take your present condition into account you may experience some muscle soreness. 2. The Educogym system uses a kinesthetic approach, that is the trainer may touch or hold you to ensure you understand how the exercises are to be done.? </label>
                                                <div className="col-sm-9">
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={(event) => this.addValueInArray("16", event.target.value)} type="radio" name="gridRadios16" value="Yes" checked={answers_list[15].answer == 'Yes' ? true : false} />
                                                        <label className="form-check-label"> Yes </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={(event) => this.addValueInArray("16", event.target.value)} type="radio" name="gridRadios16" value="No" checked={answers_list[15].answer == 'Yes' ? true : false} />
                                                        <label className="form-check-label"> No</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 " style={new_style.label_top_margin}>
                                                <label>If your answer to any of the above questions were yes, please provide more details.</label>
                                            </div>
                                        </div>

                                        <hr />
                                        <Button variant="primary" className="float-right" onClick={() => this.completedStep1()} >Next</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
                }
                {step2 == true ?
                    <>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label>Carefully answer the questions Your answers will be used to create the perfect program especially to suit your needs and goals. </label>
                                                <div className="col-sm-9">
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={event => { this.addValueInArray("17", event.target.value) }} type="radio" name="gridRadios17" value="Fat loss" checked={answers_list[16].answer == 'Fat loss' ? true : false} />
                                                        <label className="form-check-label"> Fat loss </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={event => { this.addValueInArray("17", event.target.value) }} type="radio" name="gridRadios17" value="Build muscle" checked={answers_list[16].answer == 'Build muscle' ? true : false} />
                                                        <label className="form-check-label"> Build muscle</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={event => { this.addValueInArray("17", event.target.value) }} type="radio" name="gridRadios17" value="Building muscle and lose fat" checked={answers_list[16].answer == 'Building muscle and lose fat' ? true : false} />
                                                        <label className="form-check-label"> Building muscle and lose fat</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={event => { this.addValueInArray("17", event.target.value) }} type="radio" name="gridRadios17" value="Build strength" checked={answers_list[16].answer == 'Build strength' ? true : false} />
                                                        <label className="form-check-label"> Build strength</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={event => { this.addValueInArray("17", event.target.value) }} type="radio" name="gridRadios17" value="Tone up" checked={answers_list[16].answer == 'Tone up' ? true : false} />
                                                        <label className="form-check-label"> Tone up</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={event => { this.addValueInArray("17", event.target.value) }} type="radio" name="gridRadios17" value="Imporve health" checked={answers_list[16].answer == 'Imporve health' ? true : false} />
                                                        <label className="form-check-label"> Imporve health</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" onChange={event => { this.addValueInArray("17", event.target.value) }} type="radio" name="gridRadios17" value="Other" checked={answers_list[16].answer == 'Other' ? true : false} />
                                                        <label className="form-check-label"> Other</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        <Button variant="primary" className="float-right" onClick={() => this.completedStep2()} >Next</Button>
                                        {isBack == true ? <Button variant="light" className="float-right mr-3" onClick={() => this.handleBack2()} >Back</Button> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
                }
                {step3 == true ?
                    <>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-primary mb-0" style={new_style.top_margin}> Dietary Pattern </h4>
                                        <h6 className="" style={new_style.top_margin}> Please answer truthfully. It will help us chose the perfect plan for you.  </h6><br />

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-row" style={new_style.form_field}>
                                                    <div className="form-group col-lg-12">
                                                        <label>What do you have for breakfast?</label>
                                                        <input type="text" onChange={(e) => this.addValueInArray("18", e.target.value)} className="form-control border-bottom" placeholder="" value={answers_list[17].answer} />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>What do you have for lunch?</label>
                                                        <input type="text" onChange={(e) => this.addValueInArray("19", e.target.value)} className="form-control border-bottom" placeholder="" value={answers_list[18].answer} />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>What do you have for dinner?</label>
                                                        <input type="text" onChange={(e) => this.addValueInArray("20", e.target.value)} className="form-control border-bottom" placeholder="" value={answers_list[19].answer} />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>Do you snack? If so what do you have?</label>
                                                        <input type="text" onChange={(e) => this.addValueInArray("21", e.target.value)} className="form-control border-bottom" placeholder="" value={answers_list[20].answer} />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>What do you drink?</label>
                                                        <input type="text" onChange={(e) => this.addValueInArray("22", e.target.value)} className="form-control border-bottom" placeholder="" value={answers_list[21].answer} />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>Do you take alcohol? If so how much per week?</label>
                                                        <input type="text" onChange={(e) => this.addValueInArray("23", e.target.value)} className="form-control border-bottom" placeholder="" value={answers_list[22].answer} />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>Please note that by submitting this form you agree the following: 1. This is an intense program designed to achieve rapid and exceptional results. While we will take your present condition into account you may experience some muscle soreness. 2. The Educogym system uses a kinesthetic approach, that is the trainer may touch or hold you to ensure you understand how the exercises are to be done.? </label>
                                                        <div className="col-sm-9">
                                                            <div className="form-check">
                                                                <input className="form-check-input" onChange={(e) => this.addValueInArray("24", e.target.value)} type="radio" name="gridRadios24" value="Yes" checked={answers_list[23].answer == 'Yes' ? true : false} />
                                                                <label className="form-check-label"> Yes </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" onChange={(e) => this.addValueInArray("24", e.target.value)} type="radio" name="gridRadios24" value="No" checked={answers_list[23].answer == 'No' ? true : false} />
                                                                <label className="form-check-label"> No</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        <Button variant="primary" className="float-right" onClick={() => this.completedStep3()} >Next</Button>
                                        {isBack == true ? <Button variant="light" className="float-right mr-3" onClick={() => this.handleBack3()} >Back</Button> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
                }
                {step4 == true ?
                    <>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-primary mb-0" style={new_style.top_margin}> Well Being </h4>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Do you often get colds or flues?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("25", e.target.value)} type="radio" name="gridRadios25" value="Yes" checked={answers_list[24].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("25", e.target.value)} type="radio" name="gridRadios25" value="No" checked={answers_list[24].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>How is your hair and skin?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("26", e.target.value)} type="radio" name="gridRadios26" value="Dry" checked={answers_list[25].answer == 'Dry' ? true : false} />
                                                            <label className="form-check-label"> Dry </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("26", e.target.value)} type="radio" name="gridRadios26" value="Oily" checked={answers_list[25].answer == 'Oily' ? true : false} />
                                                            <label className="form-check-label"> Oily </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("26", e.target.value)} type="radio" name="gridRadios26 " value="Normal" checked={answers_list[25].answer == 'Normal' ? true : false} />
                                                            <label className="form-check-label"> Normal </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Are your nails strong or brittle? </label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("27", e.target.value)} type="radio" name="gridRadios27" value="Strong" checked={answers_list[26].answer == 'Strong' ? true : false} />
                                                            <label className="form-check-label"> Strong </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("27", e.target.value)} type="radio" name="gridRadios27" value="Brittle" checked={answers_list[26].answer == 'Brittle' ? true : false} />
                                                            <label className="form-check-label"> Brittle </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("27", e.target.value)} type="radio" name="gridRadios27" value="Other" checked={answers_list[26].answer == 'Other' ? true : false} />
                                                            <label className="form-check-label"> Other: </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>How much stress do you experience? </label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("28", e.target.value)} type="radio" name="gridRadios28" value="Very little" checked={answers_list[27].answer == 'Very little' ? true : false} />
                                                            <label className="form-check-label"> Very little </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("28", e.target.value)} type="radio" name="gridRadios28" value="Some" checked={answers_list[27].answer == 'Some' ? true : false} />
                                                            <label className="form-check-label"> Some </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("28", e.target.value)} type="radio" name="gridRadios28" value="A normal amount" checked={answers_list[27].answer == 'A normal amount' ? true : false} />
                                                            <label className="form-check-label"> A normal amount </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("28", e.target.value)} type="radio" name="gridRadios28" value="A lot" checked={answers_list[27].answer == 'A lot' ? true : false} />
                                                            <label className="form-check-label"> A lot </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("28", e.target.value)} type="radio" name="gridRadios28" value="I feel I'm serve stress" checked={answers_list[27].answer == `I feel I'm serve stress` ? true : false} />
                                                            <label className="form-check-label"> I feel I'm serve stress </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("28", e.target.value)} type="radio" name="gridRadios28" value="Other" checked={answers_list[27].answer == 'Other' ? true : false} />
                                                            <label className="form-check-label"> Other: </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Do you have periods? (Ladies)</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("29", e.target.value)} type="radio" name="gridRadios29" value="Yes" checked={answers_list[28].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("29", e.target.value)} type="radio" name="gridRadios29" value="No" checked={answers_list[28].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>How are your periods</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("30", e.target.value)} type="radio" name="gridRadios30" value="Pain free but heavy" checked={answers_list[29].answer == 'Pain free but heavy' ? true : false} />
                                                            <label className="form-check-label"> Pain free but heavy </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("30", e.target.value)} type="radio" name="gridRadios30" value="Painful" checked={answers_list[29].answer == 'Painful' ? true : false} />
                                                            <label className="form-check-label"> Painful </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("30", e.target.value)} type="radio" name="gridRadios30" value="Painful and heavy" checked={answers_list[29].answer == 'Painful and heavy' ? true : false} />
                                                            <label className="form-check-label"> Painful and heavy </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Do you have at least one bowel movement every day?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("31", e.target.value)} type="radio" name="gridRadios31" value="Yes" checked={answers_list[30].answer == 'Yes' ? true : false} />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("31", e.target.value)} type="radio" name="gridRadios31" value="No" checked={answers_list[30].answer == 'No' ? true : false} />
                                                            <label className="form-check-label"> No </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>How are your energy levels? </label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("32", e.target.value)} type="radio" name="gridRadios32" value="My energy is really high" checked={answers_list[31].answer == 'My energy is really high' ? true : false} />
                                                            <label className="form-check-label"> My energy is really high </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("32", e.target.value)} type="radio" name="gridRadios32" value="My energy is good enough" checked={answers_list[31].answer == 'My energy is good enough' ? true : false} />
                                                            <label className="form-check-label"> My energy is good enough </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("32", e.target.value)} type="radio" name="gridRadios32" value="My energy can vary a lot between high and low" checked={answers_list[31].answer == 'My energy can vary a lot between high and low' ? true : false} />
                                                            <label className="form-check-label"> My energy can vary a lot between high and low </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("32", e.target.value)} type="radio" name="gridRadios32" value="My energy is low" checked={answers_list[31].answer == 'My energy is low' ? true : false} />
                                                            <label className="form-check-label"> My energy is low </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("32", e.target.value)} type="radio" name="gridRadios32" value="I feel quite fatigued" checked={answers_list[31].answer == 'I feel quite fatigued' ? true : false} />
                                                            <label className="form-check-label"> I feel quite fatigued </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" onChange={(e) => this.addValueInArray("32", e.target.value)} type="radio" name="gridRadios32" value="Other" checked={answers_list[31].answer == 'Other' ? true : false} />
                                                            <label className="form-check-label"> Other: </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        <Button variant="primary" className="float-right" onClick={() => this.handleAddTrainee()} >Add Trainee</Button>
                                        <Button variant="light" className="float-right mr-3" onClick={() => this.handleBack4()} >Back</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
                }
            </Fragment>
        );
    }
}
const new_style = {
    top_margin: {
        marginTop: '1%',
        marginLeft: '1%'
    },
    icons_margin: {
        marginTop: '1%',
        marginRight: '1%'
    },
    label_top_margin: {
        marginTop: '3%',
    },
    form_field: {
        marginLeft: '1%'
    }
};
export default AddTrainee;
