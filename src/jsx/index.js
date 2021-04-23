import React from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";

/// Pages
import Login from "./pages/Login";
import Home from "./home";

class Markup extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         token: localStorage.getItem("token")
      }
   }

   componentDidMount = () => {

   }

   render() {
      return (
         <Router basename="">
            <Switch>
               <Route exact path="/">
                  <Redirect to="/auth" />
               </Route>
               <Route exact path={"/auth"} component={Login} />
               <Route exact path={"/educogym"} component={Home} />
            </Switch>
         </Router>
      )
   }
}

export default Markup;
