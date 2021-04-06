import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from 'material-table';
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";

import PageTitle from "../../layouts/PageTitle";
import data from "./data";

import uploadimage from "../../../images/uploadimage.png";
import pause_image from "../../../images/pause_image.png";

class TraineeDetails extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         viewProfileModal: false,
         viewPauseMembershipModal: false
      }
   }

   render() {

      const columns = [
         { title: "#", field: 'key' },
         { title: "Member ID", field: 'trainee_id' },
         { title: "Name", field: 'trainee_name' },
         { title: "Membership Type", field: 'membership_type' },
         { title: "Pauses Availed", field: 'pauses_availed' },
         { title: "Start Date", field: 'start_date' },
         { title: "End Date", field: 'end_date' }
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
      const { viewPauseMembershipModal, viewProfileModal } = this.state;
      return (
         <Fragment>
            <PageTitle activeMenu="Trainee Details" motherMenu="Trainee" />
            <Row>
               <Col>
                  <Card>
                     <Card.Body>
                        <MaterialTable
                           title=""
                           columns={columns}
                           data={data.trainee_details}
                           options={{
                              exportButton: true,
                              search: true,
                              actionsColumnIndex: -1
                           }}
                           editable={{
                              onRowUpdate: (newData, oldData) =>
                                 new Promise(resolve => { }),

                              onRowDelete: oldData =>
                                 new Promise(resolve => { }),
                           }}
                           actions={[
                              {
                                 icon: 'remove_red_eye',
                                 tooltip: 'View Detail',
                                 onClick: (event, rowData) => this.setState({ viewProfileModal: true })
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

            {/* Modal Of View Profile Detail */}
            <Modal show={viewProfileModal} size="lg" >
               <Modal.Header>
                  <Button variant="" className="close" onClick={() => this.setState({ viewProfileModal: false })} > <span>&times;</span> </Button>
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
                                       <input type="text" className="form-control border-bottom" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <input type="tel" className="form-control" placeholder="Age" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <input type="tel" className="form-control" placeholder="Number" />
                                    </div>
                                    <div className="form-group col-md-12">
                                       <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-12">
                                       <input type="text" className="form-control" placeholder="Address" />
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
                                             <input type="text" className="form-control border-bottom" placeholder="DOB" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="text" className="form-control" placeholder="Gender" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="text" className="form-control" placeholder="Emergency Number" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="text" className="form-control" placeholder="Pauses Availed" />
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
                                             <input type="text" className="form-control border-bottom" placeholder="membership Type" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="tel" className="form-control" placeholder="Member ID" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="date" className="form-control" placeholder="Valid From" />
                                          </div>
                                          <div className="form-group col-md-6">
                                             <input type="date" className="form-control" placeholder="Valid Till" />
                                          </div>
                                       </div>

                                       <Button variant="primary" onClick={() => this.setState({ viewProfileModal: false })} className="float-right btn-xs">Update</Button>
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
                                    <input className="form-check-input" type="radio" name="gridRadios" value="option1" checked />
                                    <label className="form-check-label"> 1 Week </label>
                                 </div>
                                 <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                    <label className="form-check-label"> 2 Week</label>
                                 </div>
                                 <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" value="option2" />
                                    <label className="form-check-label"> 3 Week</label>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>


                     <div className="row justify-content-md-center">
                        <Button variant="light" onClick={() => this.setState({ viewPauseMembershipModal: false })} className="align-self-center mr-3 btn-md"> Pause Membership </Button>
                     </div>

                  </Container>
               </Modal.Body>
            </Modal>

         </Fragment>
      );
   }
};

export default TraineeDetails;
