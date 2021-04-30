import React from "react";
import { api_base_url, requestOptions } from './components/EducoGym/config'

/// React router dom
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";

/// Pages
import Login from "./pages/Login";

// Educo Gym
import Bookings from "./components/EducoGym/Bookings";
import TraineeDetails from "./components/EducoGym/TraineeDetails";
import AddTrainee from "./components/EducoGym/AddTrainee";
import Analytics from "./components/EducoGym/Analytics";
import Educo_AppProfile from "./components/EducoGym/AppProfile";
import AboutUs from "./components/EducoGym/AboutUs";
import Schedules from "./components/EducoGym/Schedules";
import Pause from "./components/EducoGym/Pause";

class Markup extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      const routes = [
         { url: "", component: Login },
         { url: "booking", component: Bookings },
         { url: "trainee-details", component: TraineeDetails },
         { url: "add-trainee", component: AddTrainee },
         { url: "analytics", component: Analytics },
         { url: "user-profile", component: Educo_AppProfile },
         { url: "schedules", component: Schedules },
         { url: "pause", component: Pause },
         { url: "about", component: AboutUs },
      ];

      return (
         <Router basename="admin">
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
         </Router>
      )
   }
}

export default Markup;
