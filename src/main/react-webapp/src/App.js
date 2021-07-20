import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import Example from "./components/Example"
import Navbar from './components/Navbar';
import AllDrugs from './components/AllDrugs';

function App() {

  return (
      
      <Router>
          <Navbar/>
        <Route exact path="/" component={Home}/>
          {/*this is just an example of how a route should look like work and should be removed*/}
        <Route exact path="/example" component={Example}/>
        <Route path="/All-Drugs">
            <AllDrugs/>
        </Route>
      </Router>
  );
}

export default App;
