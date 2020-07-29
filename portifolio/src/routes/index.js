import React from "react";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";

//Components
import Index from "../page";
import NotFound from "../page/NotFound";



const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="*" component={NotFound} />
     </Switch>
  </Router>
);

export default Routes;