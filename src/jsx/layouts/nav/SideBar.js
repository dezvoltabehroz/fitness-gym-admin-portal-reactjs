import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

///
import drump from "../../../images/card/drump.png";

class MM extends Component {
   componentDidMount() {
      this.$el = this.el;
      this.mm = new MetisMenu(this.$el);
   }
   componentWillUnmount() { this.mm("dispose"); }

   render() {
      return (
         <div className="mm-wrapper">
            <ul className="metismenu" ref={(el) => (this.el = el)}>
               {this.props.children}
            </ul>
         </div>
      );
   }
}

class SideBar extends Component {
   /// Open menu
   componentDidMount() {
      // sidebar open/close
      var btn = document.querySelector(".nav-control");
      var aaa = document.querySelector("#main-wrapper");

      function toggleFunc() {
         return aaa.classList.toggle("menu-toggle");
      }

      btn.addEventListener("click", toggleFunc);
   }
   render() {
      /// Path
      const path = window.location.pathname;

      /// Active menu
      let booking = ["edicogym/"],
         trainee = ["edicogym/trainee-details", "edicogym/add-trainee"],
         analytics = ["edicogym/analytics"],
         user_profile = ["edicogym/user-profile"],
         schedules = ["edicogym/schedules"],
         about = ["edicogym/about"];

      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <MM className="metismenu" id="menu">
                  <li className={`${booking.includes(path.slice(1)) ? "mm-active" : ""}`} >
                     <Link to="/" className="ai-icon" aria-expanded="false" >
                        <i className="fa fa-calendar"></i> <span className="nav-text">Booking</span>
                     </Link>
                  </li>
                  <li className={`${trainee.includes(path.slice(1)) ? "mm-active" : ""}`}>
                     <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
                        <i className="fa fa-users"></i> <span className="nav-text">Trainee</span> </Link>
                     <ul aria-expanded="false">
                        <li> <Link to="/trainee-details">Trainee Details</Link> </li>
                        <li> <Link to="/add-trainee">Add Trainee</Link> </li>
                     </ul>
                  </li>
                  <li className={`${analytics.includes(path.slice(1)) ? "mm-active" : ""}`} >
                     <Link to="analytics" className="ai-icon" aria-expanded="false" >
                        <i className="fa fa-bar-chart"></i> <span className="nav-text">Analytics</span>
                     </Link>
                  </li>
                  <li className={`${user_profile.includes(path.slice(1)) ? "mm-active" : ""}`} >
                     <Link to="user-profile" className="ai-icon" aria-expanded="false" >
                        <i className="fa fa-user-o"></i> <span className="nav-text">User Profile</span>
                     </Link>
                  </li>
                  <li className={`${schedules.includes(path.slice(1)) ? "mm-active" : ""}`} >
                     <Link to="schedules" className="ai-icon" aria-expanded="false" >
                        <i className="fa fa-calendar-o"></i> <span className="nav-text">Schedules</span>
                     </Link>
                  </li>
                  <li className={`${about.includes(path.slice(1)) ? "mm-active" : ""}`} >
                     <Link to="about" className="ai-icon" aria-expanded="false" >
                        <i className="fa fa-info-circle"></i> <span className="nav-text">About</span>
                     </Link>
                  </li>
               </MM>
            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
