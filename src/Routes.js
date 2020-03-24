import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import App from './containers/App'

function Routes() {
    return(
       <div>
           <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
      </Router>
       </div>
    )
}
export default Routes