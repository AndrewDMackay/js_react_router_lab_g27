
import React from 'react';
import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = ()=> {
  
  return (
    <Router>
      <>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/pricing" compoent={Pricing}/>
      </>
    </Router>
  )

}

export default App;

