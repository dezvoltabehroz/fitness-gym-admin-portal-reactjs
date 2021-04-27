import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, Modal, Dropdown, Card, Container } from "react-bootstrap";
import { api_base_url, requestOptions } from './config';
import { Col as Column, message, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const moment = require('moment');

class Bookings extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         value: new Date(),
         addPlan: false,
         isLoading: true,
         weeklyPlan: [],
         all_slots: [],
         blocked_slots: [],
         full_slots: [],
         available_slots: [],
         slots: true,
         availableSlots: false,
         fullSlots: false,
         blockedSlots: false,
         showCustomerList: false,
         users: [],
         checkedUser: "",
         val: "",
         assignItem: {}
      }
      this.arrayHolder = [];
   }

   componentDidMount = () => {
      this.fetchAllbookings(moment(this.state.value).format('YYYY-MM-DD'))
      this.fetchCustomerList()
   }

   fetchCustomerList = () => {
      const options = {
         ...requestOptions,
         body: JSON.stringify({})
      };
      fetch(api_base_url + 'admin/listAllCustomer', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               this.arrayHolder = res.data;
               this.setState({ users: res.data })
            }
         })
         .catch((error) => { })
   }

   fetchAllbookings = (date) => {
      const options = {
         ...requestOptions,
         body: JSON.stringify({ date: moment(date).format('YYYY-MM-DD') })
      };
      fetch(api_base_url + 'admin/listAllBooking', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               this.setState({
                  all_slots: res.data.all_slots,
                  blocked_slots: res.data.blocked_slots,
                  full_slots: res.data.full_slots,
                  available_slots: res.data.available_slots,
                  slots: true,
                  availableSlots: false,
                  fullSlots: false,
                  blockedSlots: false,
               })
               this.fetchWeeklyPlan(moment(date).format('YYYY-MM-DD'))
            }
            else {
               // alert(res.message)
               this.fetchWeeklyPlan(moment(date).format('YYYY-MM-DD'))
               this.setState({
                  all_slots: [],
                  blocked_slots: [],
                  full_slots: [],
                  available_slots: [],
               })
            }
         })
         .catch((error) => {
            this.setState({ isLoading: false })
            // alert(error)
         })
   }

   handleDate = (date) => {
      this.setState({ value: date, isLoading: true })
      this.fetchAllbookings(moment(date).format('YYYY-MM-DD'))
      // this.fetchWeeklyPlan(moment(date).format('YYYY-MM-DD'))
   }

   fetchWeeklyPlan = (date) => {
      this.setState({ isLoading: true })
      const options = {
         ...requestOptions,
         body: JSON.stringify({
            date:
               // "2021-04-30"
               moment(date).format('YYYY-MM-DD')
         })
      };
      fetch(api_base_url + 'admin/exercisePlan', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               // message.success(res.message)
               this.setState({ weeklyPlan: res.data, isLoading: false })
            }
            else {
               // alert(res.message)
               this.setState({ isLoading: false })
            }
         })
         .catch((error) => {
            this.setState({ isLoading: false })
            // alert(error)
         })
   }

   handleBlockSlots = (item) => {
      let userData = {
         booking_date: moment(this.state.value).format('YYYY-MM-DD'),
         booking_start_time: item.booking_start_time,
         booking_end_time: item.booking_end_time
      }
      const options = {
         ...requestOptions,
         body: JSON.stringify(userData)
      };
      fetch(api_base_url + 'admin/blockSlots', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               console.log(res)
               this.fetchAllbookings(moment(this.state.value).format('YYYY-MM-DD'))
            }
            else {
               this.fetchAllbookings(moment(this.state.value).format('YYYY-MM-DD'))
            }
         })
         .catch((error) => {
            this.setState({ isLoading: false })
         })
   }

   handleUnBlockSlots = (item) => {
      let userData = {
         booking_date: moment(this.state.value).format('YYYY-MM-DD'),
         booking_start_time: item.booking_start_time,
         booking_end_time: item.booking_end_time
      }
      const options = {
         ...requestOptions,
         body: JSON.stringify(userData)
      };
      fetch(api_base_url + 'admin/unBlockSlots', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               this.fetchAllbookings(moment(this.state.value).format('YYYY-MM-DD'))
            }
            else {
               this.fetchAllbookings(moment(this.state.value).format('YYYY-MM-DD'))
            }
         })
         .catch((error) => {
            this.setState({ isLoading: false })
         })
   }

   handleAssignSlots = () => {
      const { checkedUser, assignItem } = this.state;
      let userData = {
         booking_date: moment(this.state.value).format('YYYY-MM-DD'),
         booking_start_time: assignItem.booking_start_time,
         booking_end_time: assignItem.booking_end_time,
         customer_id: checkedUser
      }
      const options = {
         ...requestOptions,
         body: JSON.stringify(userData)
      };
      fetch(api_base_url + 'admin/makeBookingForUser', options)
         .then(response => response.json())
         .then((res) => {
            if (res.success) {
               this.fetchAllbookings(moment(this.state.value).format('YYYY-MM-DD'))
               this.setState({ showCustomerList: false })
            }
            else {
               this.fetchAllbookings(moment(this.state.value).format('YYYY-MM-DD'))
               this.setState({ showCustomerList: false })
            }
         })
         .catch((error) => {
            this.setState({ isLoading: false, showCustomerList: false })
         })
   }

   viewHandlerOfAssignSlots = (userAdded) => {
      let caseVal = userAdded == undefined ? 0 : userAdded.length;
      switch (caseVal) {
         case 1:
            return (
               <>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[0].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
               </>
            )
            break;

         case 2:
            return (
               <>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[0].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[1].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
               </>
            )
            break;

         case 3:
            return (
               <>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[0].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[1].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[2].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
               </>
            )
            break;

         case 4:
            return (
               <>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[0].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[1].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[2].full_name}`}</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button variant="primary light btn-xs w-100">{`${userAdded[3].full_name}`}</Button>
                  </div>
               </>
            )
            break;

         default:
            return (
               <>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
                  <div className="d-flex mb-1 align-items-center">
                     <Button onClick={() => this.setState({ showCustomerList: true })} variant="outline-light btn-xs w-100">Empty</Button>
                  </div>
               </>
            )
            break;
      }
   }

   renderItems = (array) => {
      return (
         <>
            {
               array.length == 0 ?
                  <div className="card-body">
                     <div className="d-flex p-3 list-row flex-wrap align-items-center justify-content-between">
                        <div className="booking-slot flex-grow-1">
                           <div className="d-flex align-items-center">
                              <p className="fs-24 text-primary mb-0">No slots available :(</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  :
                  array.map((item, index) => {
                     const time = moment().format("YYYY-MM-DD");

                     let i = 0;
                     return (
                        item.is_blocked == '1' ?
                           <div className="card-body pt-0">
                              <div className="d-flex p-3 list-row flex-wrap align-items-center justify-content-between">
                                 <div className="booking-slot flex-grow-1">
                                    <div className="d-flex align-items-center">
                                       <div className="list-icon mr-3 d-flex align-items-center justify-content-center">
                                          <div className="block-slot">
                                             <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7841 0.114031C12.4991 0.162947 11.9811 0.250933 11.6331 0.309591C9.65934 0.642261 7.22376 1.74981 5.58253 3.06122C3.23856 4.93401 1.66448 7.15316 0.732319 9.89919C0.236604 11.3594 0.0767186 12.2649 0.0184845 13.941C-0.0259682 15.225 0.0026309 15.7185 0.183032 16.7776C0.894897 20.9568 3.19266 24.5144 6.59324 26.7027C7.38924 27.2149 9.0686 27.997 10.09 28.3309C14.5623 29.7933 19.824 28.8141 23.534 25.8289C25.1576 24.5225 26.7824 22.4719 27.6049 20.6916C28.4261 18.9141 28.9988 16.5016 29 14.8152C29.001 13.2554 28.6259 11.0639 28.114 9.6401C26.6331 5.52101 23.3031 2.19679 19.3049 0.846112C17.1309 0.111751 14.5116 -0.182263 12.7841 0.114031ZM16.8204 2.65849C19.8179 3.22765 22.5735 5.03413 24.3877 7.61921C26.8817 11.1732 27.2495 16.0132 25.3151 19.8275C24.9142 20.6179 24.0816 21.9266 23.9133 22.0307C23.8582 22.0648 20.0026 18.287 15.3455 13.6358L6.87778 5.17901L7.24045 4.87059C8.20846 4.04762 9.94056 3.21574 11.5892 2.78202C13.0346 2.40189 15.1992 2.3508 16.8204 2.65849ZM13.6897 15.4327C18.2944 20.0212 22.0455 23.824 22.0257 23.8834C21.9814 24.0162 20.8603 24.7759 20.0949 25.1917C19.2188 25.6677 18.3402 25.9906 17.1184 26.2851C16.1581 26.5166 15.7721 26.5551 14.442 26.5511C13.4352 26.5481 12.6191 26.4891 12.1253 26.3832C7.70311 25.4359 4.22222 22.2666 2.95589 18.0346C2.55871 16.7072 2.45427 15.9453 2.45893 14.4073C2.46587 12.0797 2.9735 10.2631 4.16741 8.29284C4.75192 7.3282 5.07003 6.93677 5.20267 7.01874C5.26598 7.05792 9.08518 10.8442 13.6897 15.4327Z" />
                                             </svg>
                                             <span className="mt-1 d-block">Blocked</span>
                                          </div>
                                       </div>
                                       <div className="info">
                                          <span className="fs-20">{moment(`${time} ${item.booking_start_time}`).format("hh:mm A")}<br /> GMT +01:00 am</span>
                                          <br />
                                          <span style={{ fontSize: 12 }}>({moment(`${time} ${item.booking_time_duration}`).format("mm")}mins)</span>
                                       </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                       <button onClick={() => this.handleUnBlockSlots(item)} type="button" class="float-right btn btn-primary">Unblock Slot</button>
                                       <Link className="slot-edit-icon ml-3" to='#'>
                                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9456 0.146079C18.2698 0.373506 16.0624 2.37559 15.8908 2.91683C15.7981 3.20896 16.3907 3.88586 19.2184 6.71907C21.1107 8.61463 22.7647 10.1657 22.894 10.1657C23.0233 10.1657 23.6646 9.64837 24.3189 9.01606C25.2201 8.14521 25.5786 7.65583 25.7968 6.99836C26.129 5.99671 26.0489 4.77493 25.5928 3.88656C25.2073 3.1361 22.8268 0.759489 22.0707 0.370383C21.3376 -0.00692619 19.7406 -0.12142 18.9456 0.146079ZM22.6845 3.29102C24.126 4.73399 24.1353 4.74908 24.1353 5.63259C24.1353 6.41306 24.0575 6.60787 23.4985 7.227L22.8619 7.93253L20.4594 5.53614L18.0568 3.13992L18.7496 2.48939C19.3654 1.91102 19.5417 1.83885 20.3379 1.83885C21.2296 1.83885 21.2397 1.8451 22.6845 3.29102ZM7.52538 11.0938L1.04529 17.5731L0.52256 21.4322L0 25.2914L0.354093 25.6456L0.708185 26L4.49228 25.5101L8.27655 25.0202L15.0794 18.2465C18.821 14.521 21.8822 11.3496 21.8822 11.1992C21.8822 10.7205 21.4383 10.2958 20.9379 10.2958C20.5325 10.2958 19.4059 11.3446 13.9907 16.7631L7.52746 23.2305L5.21554 23.5452C3.9439 23.7181 2.70414 23.8621 2.46028 23.865L2.01675 23.8702L2.40325 21.0658L2.78958 18.2614L8.95613 12.0876C13.3046 7.73407 15.1227 5.8019 15.1227 5.53423C15.1227 5.17323 14.5493 4.61446 14.179 4.61446C14.0836 4.61446 11.0895 7.53024 7.52538 11.0938ZM10.5784 14.1091C4.02276 20.6618 3.7834 20.9517 4.41151 21.5804C5.03962 22.209 5.32924 21.9695 11.8761 15.4079C15.3776 11.8985 18.2424 8.91041 18.2424 8.76764C18.2424 8.32458 17.7211 7.73702 17.3282 7.73702C17.0666 7.73702 15.0284 9.66121 10.5784 14.1091Z" />
                                          </svg>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="right-block blocked-slot-icon text-center pr-5">
                                    <div className="block-slot">
                                       <svg width="73" height="73" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7841 0.114031C12.4991 0.162947 11.9811 0.250933 11.6331 0.309591C9.65934 0.642261 7.22376 1.74981 5.58253 3.06122C3.23856 4.93401 1.66448 7.15316 0.732319 9.89919C0.236604 11.3594 0.0767186 12.2649 0.0184845 13.941C-0.0259682 15.225 0.0026309 15.7185 0.183032 16.7776C0.894897 20.9568 3.19266 24.5144 6.59324 26.7027C7.38924 27.2149 9.0686 27.997 10.09 28.3309C14.5623 29.7933 19.824 28.8141 23.534 25.8289C25.1576 24.5225 26.7824 22.4719 27.6049 20.6916C28.4261 18.9141 28.9988 16.5016 29 14.8152C29.001 13.2554 28.6259 11.0639 28.114 9.6401C26.6331 5.52101 23.3031 2.19679 19.3049 0.846112C17.1309 0.111751 14.5116 -0.182263 12.7841 0.114031ZM16.8204 2.65849C19.8179 3.22765 22.5735 5.03413 24.3877 7.61921C26.8817 11.1732 27.2495 16.0132 25.3151 19.8275C24.9142 20.6179 24.0816 21.9266 23.9133 22.0307C23.8582 22.0648 20.0026 18.287 15.3455 13.6358L6.87778 5.17901L7.24045 4.87059C8.20846 4.04762 9.94056 3.21574 11.5892 2.78202C13.0346 2.40189 15.1992 2.3508 16.8204 2.65849ZM13.6897 15.4327C18.2944 20.0212 22.0455 23.824 22.0257 23.8834C21.9814 24.0162 20.8603 24.7759 20.0949 25.1917C19.2188 25.6677 18.3402 25.9906 17.1184 26.2851C16.1581 26.5166 15.7721 26.5551 14.442 26.5511C13.4352 26.5481 12.6191 26.4891 12.1253 26.3832C7.70311 25.4359 4.22222 22.2666 2.95589 18.0346C2.55871 16.7072 2.45427 15.9453 2.45893 14.4073C2.46587 12.0797 2.9735 10.2631 4.16741 8.29284C4.75192 7.3282 5.07003 6.93677 5.20267 7.01874C5.26598 7.05792 9.08518 10.8442 13.6897 15.4327Z" />
                                       </svg>
                                       <span className="mt-4 d-block">Blocked</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           :
                           <div className="card-body">
                              <div className="d-flex p-3 list-row flex-wrap align-items-center justify-content-between">
                                 <div className="booking-slot flex-grow-1">
                                    <div className="d-flex align-items-center">
                                       <div className="list-icon mr-3 d-flex align-items-center justify-content-center">
                                          <p className="fs-24 text-primary mb-0">{item.booked_slots}/4</p>
                                       </div>
                                       <div className="info">
                                          <span className="fs-20">{moment(`${time} ${item.booking_start_time}`).format("hh:mm A")}<br /> GMT +01:00 am</span>
                                          <br />
                                          <span style={{ fontSize: 12 }}>({moment(`${time} ${item.booking_time_duration}`).format("mm")}mins)</span>
                                       </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                       <button type="button" onClick={() => this.handleBlockSlots(item)} class="float-right btn btn-primary">Block Slot</button>
                                       <Link className="slot-edit-icon ml-3" to='#'>
                                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9456 0.146079C18.2698 0.373506 16.0624 2.37559 15.8908 2.91683C15.7981 3.20896 16.3907 3.88586 19.2184 6.71907C21.1107 8.61463 22.7647 10.1657 22.894 10.1657C23.0233 10.1657 23.6646 9.64837 24.3189 9.01606C25.2201 8.14521 25.5786 7.65583 25.7968 6.99836C26.129 5.99671 26.0489 4.77493 25.5928 3.88656C25.2073 3.1361 22.8268 0.759489 22.0707 0.370383C21.3376 -0.00692619 19.7406 -0.12142 18.9456 0.146079ZM22.6845 3.29102C24.126 4.73399 24.1353 4.74908 24.1353 5.63259C24.1353 6.41306 24.0575 6.60787 23.4985 7.227L22.8619 7.93253L20.4594 5.53614L18.0568 3.13992L18.7496 2.48939C19.3654 1.91102 19.5417 1.83885 20.3379 1.83885C21.2296 1.83885 21.2397 1.8451 22.6845 3.29102ZM7.52538 11.0938L1.04529 17.5731L0.52256 21.4322L0 25.2914L0.354093 25.6456L0.708185 26L4.49228 25.5101L8.27655 25.0202L15.0794 18.2465C18.821 14.521 21.8822 11.3496 21.8822 11.1992C21.8822 10.7205 21.4383 10.2958 20.9379 10.2958C20.5325 10.2958 19.4059 11.3446 13.9907 16.7631L7.52746 23.2305L5.21554 23.5452C3.9439 23.7181 2.70414 23.8621 2.46028 23.865L2.01675 23.8702L2.40325 21.0658L2.78958 18.2614L8.95613 12.0876C13.3046 7.73407 15.1227 5.8019 15.1227 5.53423C15.1227 5.17323 14.5493 4.61446 14.179 4.61446C14.0836 4.61446 11.0895 7.53024 7.52538 11.0938ZM10.5784 14.1091C4.02276 20.6618 3.7834 20.9517 4.41151 21.5804C5.03962 22.209 5.32924 21.9695 11.8761 15.4079C15.3776 11.8985 18.2424 8.91041 18.2424 8.76764C18.2424 8.32458 17.7211 7.73702 17.3282 7.73702C17.0666 7.73702 15.0284 9.66121 10.5784 14.1091Z" />
                                          </svg>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="right-block">
                                    {this.viewHandlerOfAssignSlots(item.userAdded)}
                                 </div>
                              </div>
                           </div>
                     )
                  })
            }
         </>
      )
   }

   searchFilterCustomer = text => {
      console.log("text : ", text)
      this.setState({ val: text });
      const newData = this.arrayHolder.filter(item => {
         const itemData = `${item.first_name.toUpperCase()} ${item.first_name.toUpperCase()} ${item.first_name.toUpperCase()} ${item.last_name.toUpperCase()} ${item.last_name.toUpperCase()} ${item.last_name.toUpperCase()} `;
         const textData = text.toUpperCase();
         return itemData.indexOf(textData) > -1;
      });
      console.log(newData)
      if (newData.length != 0) {
         console.log(newData)
         this.setState({ users: newData });
      }
   };

   render() {
      const { value, addPlan, showCustomerList, val, users, isLoading, weeklyPlan, checkedUser, slots, availableSlots, blockedSlots, fullSlots, all_slots, full_slots, blocked_slots, available_slots } = this.state;
      const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

      return (
         <React.Fragment>
            {
               isLoading ?
                  <Column span={24}>
                     <Spin indicator={antIcon} />
                  </Column>
                  :
                  <div className="row">
                     <div className="col-xl-3 col-xxl-4">
                        <div className="row">
                           <div className="col-xl-12">
                              <div className="card flex-xl-column flex-sm-row flex-column">
                                 <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                                    <Calendar onChange={(val) => this.handleDate(val)} value={value} />
                                 </div>
                                 <div className="card-body col-md-6 col-lg-6 col-lg-12">
                                    {weeklyPlan.length == 0 ?
                                       <h6 className="fs-16 text-black mb-4"> No record Found </h6> :
                                       <>
                                          <h6 className="fs-16 text-black mb-4"> Next week plan </h6>
                                          {weeklyPlan.map((data, index) => {
                                             return (
                                                <div className="d-flex mb-4 align-items-center">
                                                   <span className="date-icon mr-3"> {data.user_count} </span>
                                                   <div>
                                                      <h6 className="fs-16">
                                                         <Link to="/workout-statistic" className="text-black"> {data.exercise_name} </Link>
                                                      </h6>
                                                      {data.exercise_duration == null ?
                                                         <span> {data.exercise_details} </span>
                                                         :
                                                         <span>{data.exercise_duration} | {data.exercise_details}</span>
                                                      }
                                                   </div>
                                                </div>
                                             )
                                          })}
                                       </>
                                    }
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-xxl-8">
                        <div className="row">
                           <div className="col-xl-12">
                              <div className="card plan-list">
                                 <div className="card-header slot-card-header d-sm-flex d-block pb-0 border-0">
                                    <div className="mr-auto pr-3">
                                       <h4 className="text-black fs-20 mb-0">Booking Slots</h4>
                                    </div>
                                    <Dropdown className="mt-sm-0 mt-3">
                                       <Dropdown.Toggle
                                          variant=""
                                          as="button"
                                          className="btn rounded border text-black border-light dropdown-toggle"
                                       >
                                          {availableSlots ? "Available Slots" : fullSlots ? "Full Slots" : blockedSlots ? "Blocked Slots" : "All Slots"}
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-right">
                                          <Dropdown.Item onSelect={() => this.setState({ slots: true, availableSlots: false, fullSlots: false, blockedSlots: false })} >All Slots</Dropdown.Item>
                                          <Dropdown.Item onSelect={() => this.setState({ availableSlots: true, slots: false, fullSlots: false, blockedSlots: false })} >Available Slots</Dropdown.Item>
                                          <Dropdown.Item onSelect={() => this.setState({ fullSlots: true, availableSlots: false, slots: false, blockedSlots: false })}>Full Slots</Dropdown.Item>
                                          <Dropdown.Item onSelect={() => this.setState({ blockedSlots: true, slots: false, availableSlots: false, fullSlots: false, })}>Blocked Slots</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                                 {
                                    slots ?
                                       this.renderItems(all_slots)
                                       :
                                       availableSlots ?
                                          this.renderItems(available_slots)
                                          :
                                          fullSlots ?
                                             this.renderItems(full_slots)
                                             :
                                             blockedSlots ?
                                                this.renderItems(blocked_slots)
                                                :
                                                null
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
            }
            <Modal show={showCustomerList} size="md">
               <Modal.Header>
                  <Button variant="" className="close" onClick={() => this.setState({ showCustomerList: false })} > <span>&times;</span> </Button>
                  <br />
               </Modal.Header>
               <Modal.Body>
                  <Container>
                     <Card>
                        <Card.Header style={new_style.card_header_color}>
                           <Card.Title style={{ margin: "auto" }}>
                              {/* <img src={pause_image} width="58" height="50" style={new_style.center_align} /> */}
                              <h4 style={new_style.header_heading}>Customer List</h4>
                           </Card.Title>
                        </Card.Header>
                        <Card.Body>
                           <div className="form-group col-md-12">
                              <input type="text" value={val}
                                 // disabled={true}
                                 onChangeCapture={(e) => this.searchFilterCustomer(e.target.value)}
                                 className="form-control" placeholder="Search" />
                           </div>
                           <div style={{ height: 300, overflow: "scroll" }}>
                              {users.map((item, index) => {
                                 return (
                                    index <= 20 ?
                                       <div className="form-group col-md-12">
                                          <div className="col-sm-12">
                                             <div className="form-check">
                                                <input className="form-check-input" onClick={() => { console.log(item); this.setState({ checkedUser: item.id }) }} type="radio" name={`gridRadiosCustomer${item.index}`} value={item.id} checked={checkedUser == item.id ? true : false} />
                                                <label className="form-check-label"> {item.first_name} {item.last_name} </label>
                                             </div>
                                          </div>
                                       </div>
                                       : null
                                 )
                              })}
                           </div>

                        </Card.Body>
                     </Card>


                     <div className="row justify-content-md-center">
                        <Button variant="light" onClick={() => this.handleAssignSlots()} className="align-self-center mr-3 btn-md"> Assign Slot </Button>
                     </div>

                  </Container>
               </Modal.Body>
            </Modal>
         </React.Fragment>
      );
   };
}

const new_style = {
   top_margin: { marginTop: '1%', marginLeft: '1%' },
   icons_margin: { marginTop: '1%', marginRight: '1%' },
   label_top_margin: { marginTop: '3%', },
   form_field: { marginLeft: '1%' },
   card_header_color: { backgroundColor: "#00B4E5" },
   center_align: { display: "block", marginLeft: "auto", marginRight: "auto" },
   header_heading: { color: "#FFF", display: "block", marginLeft: "auto", marginRight: "auto" }
};

export default Bookings;
