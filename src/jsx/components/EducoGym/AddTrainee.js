import React, { Fragment, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import PageTitle from "../../layouts/PageTitle";

import uploadimage from "../../../images/uploadimage.png";


class AddTrainee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            isBack: false
        }
    }

    completedStep1 = () => {
        this.setState({
            step1: false,
            step2: true,
            step3: false,
            step4: false,
            isBack: false
        })
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
        this.setState({
            step1: false,
            step2: false,
            step3: false,
            step4: true,
            isBack: false
        })

    }
    completedStep4 = () => {
        this.setState({
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            isBack: true
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

    render() {
        const { step1, step2, step3, step4, isBack } = this.state;
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
                                                                <input type="text" className="form-control border-bottom" placeholder="First Name" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="text" className="form-control" placeholder="Last Name" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="tel" className="form-control" placeholder="Age" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="date" className="form-control" placeholder="DOB" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="tel" className="form-control" placeholder="Contact Number" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input type="tel" className="form-control" placeholder="Emergency Number" />
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <input type="email" className="form-control" placeholder="Email" />
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <input type="text" className="form-control" placeholder="Address" />
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
                                                    <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                    <label className="form-check-label"> Basic </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
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
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Male </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Female</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Where did you hear about us?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Returning CLient </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> From a friend</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Instagram</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> facebook</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Google</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Talk / Presentation</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Other : </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you explained chest pain on exercise recently?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Do you experience breathlessness in normal activity?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you had any recent operations?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you any joint condition, injuries or aches and pains?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Are you taking prescribed medication?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
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
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Do you have asthma?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Are you diabetic?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you been diagnosed with high cholesterol?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you been diagnosed with high blood pressure?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Are you now, or have you recently been pregnant? (Ladies)</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you experienced dizziness or light-headedness recently?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Have you been diagnosed with anemia or iron deficiency lately?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
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
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                        <label className="form-check-label"> Yes </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
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
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                        <label className="form-check-label"> Yes </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
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
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                        <label className="form-check-label"> Fat loss </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                        <label className="form-check-label"> Build muscle</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                        <label className="form-check-label"> Building muscle and lose fat</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                        <label className="form-check-label"> Build strength</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                        <label className="form-check-label"> Tone up</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                        <label className="form-check-label"> Imporve health</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
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
                                                        <input type="text" className="form-control border-bottom" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>What do you have for lunch?</label>
                                                        <input type="text" className="form-control border-bottom" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>What do you have for dinner?</label>
                                                        <input type="text" className="form-control border-bottom" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>Do you snack? If so what do you have?</label>
                                                        <input type="text" className="form-control border-bottom" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>What do you drink?</label>
                                                        <input type="text" className="form-control border-bottom" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>Do you take alcohol? If so how much per week?</label>
                                                        <input type="text" className="form-control border-bottom" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-lg-12">
                                                        <label>Please note that by submitting this form you agree the following: 1. This is an intense program designed to achieve rapid and exceptional results. While we will take your present condition into account you may experience some muscle soreness. 2. The Educogym system uses a kinesthetic approach, that is the trainer may touch or hold you to ensure you understand how the exercises are to be done.? </label>
                                                        <div className="col-sm-9">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                                <label className="form-check-label"> Yes </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
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
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>How is your hair and skin?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Dry </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Oily </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Normal </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Are your nails strong or brittle? </label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Strong </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Brittle </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Other: </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>How much stress do you experience? </label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Very little </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Some </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> A normal amount </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> A lot </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> I feel I'm serve stress </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
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
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> No </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>How are your periods</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Pain free but heavy </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Painful </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Painful and heavy </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Do you have at least one bowel movement every day?</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> Yes </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Now </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>How are your energy levels? </label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                                            <label className="form-check-label"> My energy is really high </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> My energy is good enough </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> My energy can vary a lot between high and low </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> My energy is low </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> I feel quite fatigued </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                                            <label className="form-check-label"> Other: </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        <Button variant="primary" className="float-right" onClick={() => this.completedStep4()} >Add Trainee</Button>
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
