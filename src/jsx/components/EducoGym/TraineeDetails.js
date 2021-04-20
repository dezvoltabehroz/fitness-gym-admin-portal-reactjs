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

class TraineeDetails extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         viewProfileModal: false,
         members: [],
         isLoading: true,
         viewPauseMembershipModal: false,
         memberDetail: {},
         week2: false,
         week1: true,
         week3: false,
         isPauseLoading: false
      }
   }

   componentDidMount = () => {
      this.fetchMemberList()
   }

   fetchMemberList = () => {
      const options = {
         ...requestOptions,
         body: JSON.stringify({ date: moment().format('YYYY-MM-DD') })
      };
      fetch(api_base_url + 'admin/listAllMembers', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               // message.success(res.message)
               let array = [...res.data];
               array.map((item, index) => {
                  array[index] = {
                     ...array[index],
                     membership_start_date: moment(item.membership_start_date).format('YYYY-MM-DD'),
                     membership_end_date: moment(item.membership_end_date).format('YYYY-MM-DD')
                  }
               })
               this.setState({ members: array, isLoading: false, viewProfileModal: false })
            }
            else {
               // alert(res.message)
               this.setState({ members: [], isLoading: false })
            }
         })
         .catch((error) => { // alert(error) })
   }

   fetchMemberDetail = (id) => {
      const options = {
         ...requestOptions,
         body: JSON.stringify({ member_id: id, date: moment().format('YYYY-MM-DD') })
      };
      fetch(api_base_url + 'admin/memberProfileDetails', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               // message.success(res.message)
               let array = { ...res.data[0] };
               array = {
                  ...array,
                  dob: moment(array.dob).format('YYYY-MM-DD'),
                  membership_start_date: moment(array.membership_start_date).format('YYYY-MM-DD'),
                  membership_end_date: moment(array.membership_end_date).format('YYYY-MM-DD')
               }
               this.setState({ memberDetail: array, viewProfileModal: true, })
            }
            else {
               // alert(res.message)
               this.setState({ memberDetail: {}, isLoading: false })
            }
         })
         .catch((error) => {
            // alert(error)
         })
   }

   handleUpdateProfile = () => {
      this.setState({ viewProfileModal: false, isLoading: true })
      const { memberDetail } = this.state;
      const options = {
         ...requestOptions,
         body: JSON.stringify({
            user_id: memberDetail.user_id,
            first_name: memberDetail.first_name,
            last_name: memberDetail.last_name,
            age: memberDetail.age,
            phone: memberDetail.phone,
            email: memberDetail.email,
            address: memberDetail.address,
            dob: moment(memberDetail.dob).format('YYYY-MM-DD'),
            gender: memberDetail.gender,
            emergency_num: memberDetail.emergency_num,
            membership_type: memberDetail.membership_type,
            membership_start_date: moment(memberDetail.membership_start_date).format('YYYY-MM-DD'),
            membership_end_date: moment(memberDetail.membership_end_date).format('YYYY-MM-DD')
         })
      };
      fetch(api_base_url + 'admin/updateUser', options)
         .then(response => response.json())
         .then(async (res) => {
            if (res.success) {
               // message.success(res.message)
               await this.fetchMemberList()
            }
            else {
               // alert(res.message)
               // this.setState({ memberDetail: {}, isLoading: false })
            }
         })
         .catch((error) => {
            // alert(error)
         })
   }

   handlePauseMemberShip = () => {
      this.setState({ isPauseLoading: true });
      const { memberDetail, week3, week1, week2 } = this.state;
      const options = {
         ...requestOptions,
         body: JSON.stringify({
            user_id: memberDetail.user_id,
            membership_id: memberDetail.member_id,
            pause_start: moment().format('yyyy-MM-DD'),
            pause_end: week1 ?
               moment().add(7, 'days').format('yyyy-MM-DD')
               : week2 ?
                  moment().add(14, 'days').format('yyyy-MM-DD')
                  : week3 ?
                     moment().add(21, 'days').format('yyyy-MM-DD')
                     : moment().add(7, 'days').format('yyyy-MM-DD')
         })
      };
      fetch(api_base_url + 'admin/pauseMembership', options)
         .then(response => response.json())
         .then(async (res) => {
            if (res.success) {
               // message.success(res.message)
               this.setState({ viewPauseMembershipModal: false, isPauseLoading: false })
            }
            else {
               // alert(res.message)
               this.setState({ isPauseLoading: false })
            }
         })
         .catch((error) => {
            // alert(error)
         })
   }

   handleDeleteUser = (id, resolve) => {
      const options = {
         ...requestOptions,
         body: JSON.stringify({ user_id: id })
      };
      fetch(api_base_url + 'admin/deleteUser', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               // message.success(res.message)
               resolve()
               this.fetchMemberList()
            }
            else {
               // alert(res.message)
            }
         })
         .catch((error) => {
            // alert(error)
         })
   }

   render() {

      const columns = [
         { title: "#", field: 'key' },
         { title: "Member ID", field: 'user_id' },
         { title: "Name", field: 'full_name' },
         { title: "Membership Type", field: 'membership_type' },
         { title: "Pauses Availed", field: 'is_pause' },
         { title: "Start Date", field: 'membership_start_date' },
         { title: "End Date", field: 'membership_end_date' }
      ];

      const history = useHistory;

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
      const { viewPauseMembershipModal, isPauseLoading, viewProfileModal, members, isLoading, memberDetail, week1, week2, week3 } = this.state;
      return (
         <Fragment>
            <PageTitle activeMenu="Trainee Details" motherMenu="Trainee" />
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
                                 data={members}
                                 options={{
                                    exportButton: true,
                                    search: true,
                                    actionsColumnIndex: -1
                                 }}
                                 editable={{
                                    onRowUpdate: (newData, oldData) =>
                                       new Promise(resolve => { }),

                                    onRowDelete: oldData =>
                                       new Promise(resolve => { this.handleDeleteUser(oldData.user_id, resolve) }),
                                 }}
                                 actions={[
                                    {
                                       icon: 'remove_red_eye',
                                       tooltip: 'View Detail',
                                       onClick: (event, rowData) => this.fetchMemberDetail(rowData.user_id)
                                    },
                                    {
                                       icon: "add_box",
                                       tooltip: "Add Trainee",
                                       position: "toolbar",
                                       onClick: () => { history.push("/add-trainee"); }
                                    }
                                 ]}
                              />

                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
            }


            {/* Modal Of View Profile Detail */}
            <Modal show={viewProfileModal} size="lg" >
               <Modal.Header>
                  <Button variant="" className="close" onClick={() => this.fetchMemberList()} > <span>&times;</span> </Button>
                  <br />
               </Modal.Header>
               <Modal.Body>
                  <Container>
                     <Row>
                        <Col md="6" className="ml-auto">
                           <Row>
                              <Col className="d-flex justify-content-center">
                                 <img src={uploadimage} data-holder-rendered="true" />
                              </Col>
                           </Row>

                           <Row>
                              <Col>
                                 <h6 className="text-primary mb-0" style={new_style.top_margin}> About </h6><br />

                                 <div className="form-row d-flex justify-content-center">
                                    <div className="form-group col-md-6">
                                       <input type="text" value={memberDetail.first_name}
                                          onChange={(e) => this.setState({ memberDetail: { ...memberDetail, first_name: e.target.value } })}
                                          className="form-control border-bottom" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <input type="text" value={memberDetail.last_name}
                                          onChange={(e) => this.setState({ memberDetail: { ...memberDetail, last_name: e.target.value } })}
                                          className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <input type="tel" value={memberDetail.age}
                                          onChange={(e) => this.setState({ memberDetail: { ...memberDetail, age: e.target.value } })}
                                          className="form-control" placeholder="Age" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <input type="tel" value={memberDetail.phone}
                                          onChange={(e) => this.setState({ memberDetail: { ...memberDetail, phone: e.target.value } })}
                                          className="form-control" placeholder="Number" />
                                    </div>
                                    <div className="form-group col-md-12">
                                       <input type="email" value={memberDetail.email}
                                          onChange={(e) => this.setState({ memberDetail: { ...memberDetail, email: e.target.value } })}
                                          className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-12">
                                       <input type="text" value={memberDetail.address}
                                          onChange={(e) => { this.setState({ memberDetail: { ...memberDetail, address: e.target.value } }) }}
                                          className="form-control" placeholder="Address" />
                                    </div>
                                 </div>
                              </Col>
                           </Row>
                        </Col>

                        <Col md="6" className="ml-auto">
                           <Row>
                              <Col>
                                 <Card>
                                    <Card.Body>
                                       <div className="form-row">
                                          <div className="form-group col-md-6">
                                             <input type="text" value={memberDetail.dob}
                                                onChange={(e) => this.setState({ memberDetail: { ...memberDetail, dob: e.target.value } })}
                                                className="form-control border-bottom" placeholder="DOB" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="text" value={memberDetail.gender}
                                                onChange={(e) => this.setState({ memberDetail: { ...memberDetail, gender: e.target.value } })}
                                                className="form-control" placeholder="Gender" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="text" value={memberDetail.emergency_num}
                                                onChange={(e) => this.setState({ memberDetail: { ...memberDetail, emergency_num: e.target.value } })}
                                                className="form-control" placeholder="Emergency Number" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="text" value={memberDetail.is_pause}
                                                disabled={true}
                                                onChange={(e) => this.setState({ memberDetail: { ...memberDetail, is_pause: e.target.value } })}
                                                className="form-control" placeholder="Pauses Availed" />
                                          </div>
                                       </div>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </Row>

                           <Row>
                              <Col>
                                 <Card>
                                    <Card.Body>
                                       <h4 className="text-primary mb-0" style={new_style.top_margin}> Membership Details </h4><br />

                                       <div className="form-row">
                                          <div className="form-group col-md-6">
                                             <input type="text" value={memberDetail.membership_type}
                                                onChange={(e) => this.setState({ memberDetail: { ...memberDetail, membership_type: e.target.value } })}
                                                className="form-control border-bottom" placeholder="membership Type" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="tel" value={memberDetail.member_id}
                                                disabled={true}
                                                onChange={(e) => this.setState({ memberDetail: { ...memberDetail, member_id: e.target.value } })}
                                                className="form-control" placeholder="Member ID" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="date" value={memberDetail.membership_start_date}
                                                onChange={(e) => this.setState({ memberDetail: { ...memberDetail, membership_start_date: e.target.value } })}
                                                className="form-control" placeholder="Valid From" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="date" value={memberDetail.membership_end_date}
                                                onChange={(e) => this.setState({ memberDetail: { ...memberDetail, membership_end_date: e.target.value } })}
                                                className="form-control" placeholder="Valid Till" />
                                          </div>
                                       </div>

                                       <Button variant="primary" onClick={() => this.handleUpdateProfile()} className="float-right btn-xs">Update</Button>
                                       <Button variant="light" onClick={() => this.setState({ viewPauseMembershipModal: true })} className="float-right mr-3 btn-xs"> Pause Membership </Button>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           </Row>

                        </Col>
                     </Row>
                  </Container>
               </Modal.Body>
            </Modal>

            {/* Modal Of Pause Membership */}
            <Modal show={viewPauseMembershipModal} size="md" >
               {
                  isPauseLoading ?
                     <Card>
                        <Card.Body style={{ height: 300, width: 300, justifyContent: "center", justifyItems: "center" }}>
                           <Column span={100}>
                              <Spin indicator={antIcon} />
                           </Column>
                        </Card.Body>
                     </Card>
                     :
                     <>
                        <Modal.Header>
                           <Button variant="" className="close" onClick={() => this.setState({ viewPauseMembershipModal: false })} > <span>&times;</span> </Button>
                           <br />
                        </Modal.Header>
                        <Modal.Body>
                           <Container>


                              <Card>
                                 <Card.Header style={new_style.card_header_color}>
                                    <Card.Title style={{ margin: "auto" }}>
                                       <img src={pause_image} width="58" height="50" style={new_style.center_align} />
                                       <h4 style={new_style.header_heading}>Pause Membership</h4>
                                    </Card.Title>
                                 </Card.Header>
                                 <Card.Body>
                                    <div className="form-group col-md-12">
                                       <div className="col-sm-12">
                                          <div className="form-check">
                                             <input className="form-check-input" onClick={() => this.setState({ week2: false, week1: true, week3: false })} type="radio" name="gridRadios" value="week1" checked={week1} />
                                             <label className="form-check-label"> 1 Week </label>
                                          </div>
                                          <div className="form-check">
                                             <input className="form-check-input" onClick={() => this.setState({ week2: true, week1: false, week3: false })} type="radio" name="gridRadios" value="week2" checked={week2} />
                                             <label className="form-check-label"> 2 Week</label>
                                          </div>
                                          <div className="form-check">
                                             <input className="form-check-input" onClick={() => this.setState({ week2: false, week1: false, week3: true })} type="radio" name="gridRadios" value="week3" checked={week3} />
                                             <label className="form-check-label"> 3 Week</label>
                                          </div>
                                       </div>
                                    </div>
                                 </Card.Body>
                              </Card>


                              <div className="row justify-content-md-center">
                                 <Button variant="light" onClick={() => this.handlePauseMemberShip()} className="align-self-center mr-3 btn-md"> Pause Membership </Button>
                              </div>

                           </Container>
                        </Modal.Body>
                     </>}
            </Modal>

         </Fragment>
      );
   }
};

export default TraineeDetails;
