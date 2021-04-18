import React from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";

/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";

// Educo Gym
import Bookings from "./components/EducoGym/Bookings";
import TraineeDetails from "./components/EducoGym/TraineeDetails";
import AddTrainee from "./components/EducoGym/AddTrainee";
import Analytics from "./components/EducoGym/Analytics";
import Educo_AppProfile from "./components/EducoGym/AppProfile";
import AboutUs from "./components/EducoGym/AboutUs";

const Markup = () => {
   const routes = [
      // Main Dashboard
      { url: "", component: Bookings },
      { url: "trainee-details", component: TraineeDetails },
      { url: "add-trainee", component: AddTrainee },
      { url: "analytics", component: Analytics },
      { url: "user-profile", component: Educo_AppProfile },
      { url: "about", component: AboutUs },

      { url: "page-register", component: Registration },
      { url: "page-lock-screen", component: LockScreen },
      { url: "page-login", component: Login },
      { url: "page-forgot-password", component: ForgotPassword },
      { url: "page-error-400", component: Error400 },
      { url: "page-error-403", component: Error403 },
      { url: "page-error-404", component: Error404 },
      { url: "page-error-500", component: Error500 },
      { url: "page-error-503", component: Error503 },
   ];

   return (
      <Router basename="/edicogym">
         <div id="main-wrapper" className="show">
            <Nav />

            <div className="content-body">
               <div className="container-fluid">
                  <Switch>
                     {routes.map((data, i) => (
                        <Route
                           key={i}
                           exact
                           path={`/${data.url}`}
                           component={data.component}
                        />
                     ))}
                  </Switch>
               </div>
            </div>

            <Footer />
         </div>
      </Router>
   );
};

export default Markup;
