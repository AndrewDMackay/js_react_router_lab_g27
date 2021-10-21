
import React, { useState } from 'react';

import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = ()=> {

  let initialPricing = [
    {level: "hobby", cost: 0},
    {level: "Startup", cost: 10},
    {level: "Enterprise", cost: 100}
  ]

  const [pricing, setPricing] = useState(initialPricing)
  

  return (
    <Router>
      <>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            {/* <Route path="/pricing" component={Pricing}/> */}
            <Route path="/pricing"
                render={() => <Pricing prices={pricing}/>}/>
            <Route component={ErrorPage} />
          </Switch>
      </>
    </Router>
  )

}

export default App;

