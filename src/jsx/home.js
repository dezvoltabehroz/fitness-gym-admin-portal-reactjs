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
import Login from "./pages/Login";

// Educo Gym
import Bookings from "./components/EducoGym/Bookings";
import TraineeDetails from "./components/EducoGym/TraineeDetails";
import AddTrainee from "./components/EducoGym/AddTrainee";
import Analytics from "./components/EducoGym/Analytics";
import Educo_AppProfile from "./components/EducoGym/AppProfile";
import AboutUs from "./components/EducoGym/AboutUs";
import Schedules from "./components/EducoGym/Schedules";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const routes = [
            // Main Dashboard
            { url: "", component: Bookings },
            { url: "trainee-details", component: TraineeDetails },
            { url: "add-trainee", component: AddTrainee },
            { url: "analytics", component: Analytics },
            { url: "user-profile", component: Educo_AppProfile },
            { url: "Schedules", component: Schedules },
            { url: "about", component: AboutUs },
        ];

        return (
            <Router basename="/educogym">
                <div id="main-wrapper" className="show">
                    <Nav />
                    <div className="content-body">
                        <div className="container-fluid">
                            <Switch>
                                <Route path='/auth' component={() => {
                                    window.location.href = 'http://165.227.227.1:3005/';
                                    return null;
                                }} />
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
        )
    }
}

export default Home;
