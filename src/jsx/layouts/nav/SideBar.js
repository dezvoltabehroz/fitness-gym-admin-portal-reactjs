import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

class SideBar extends Component {
      
   render() {
      /// Path
      const path = window.location.pathname;

      /// Active menu
      let booking = ["admin/booking"],
         trainee = ["admin/trainee-details", "admin/add-trainee"],
         analytics = ["admin/analytics"],
         user_profile = ["admin/user-profile"],
         schedules = ["admin/schedules"],
         pause = ["admin/pause"],
         about = ["admin/about"];

      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <div className="metismenu" id="menu">
                  <li className={`${booking.includes(path.slice(1)) ? "mm-active" : ""}`} >
                     <Link to="/booking" className="ai-icon" aria-expanded="false" >
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
                  <li className={`${pause.includes(path.slice(1)) ? "mm-active" : ""}`} >
                     <Link to="pause" className="ai-icon" aria-expanded="false" >
                        <i className="fa fa-calendar-o"></i> <span className="nav-text">Pause Requests</span>
                     </Link>
                  </li>
                  <li className={`${about.includes(path.slice(1)) ? "mm-active" : ""}`} >
                     <Link to="about" className="ai-icon" aria-expanded="false" >
                        <i className="fa fa-info-circle"></i> <span className="nav-text">About</span>
                     </Link>
                  </li>
               </div>
            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
