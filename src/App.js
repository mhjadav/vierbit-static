import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Pricing from "./pages/pricing";
import Contact from "./pages/contact";
import MakeWebsite from "./pages/makewebsite";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Switch>
              <Route  exact path="/" component={Home} />
              <Route  path="/home" component={Home} />
              <Route  path="/about" component={About} />
              <Route  path="/pricing" component={Pricing} />
              <Route  path="/contact" component={Contact} />
              <Route  path="/makeawebsite" component={MakeWebsite} />
              <Route component={Home}/>
            ]</Switch>
          </Layout>
        </div>
    </Router>
    );
  }
}

export default App;
