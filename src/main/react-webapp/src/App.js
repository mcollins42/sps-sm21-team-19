import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import AllDrugs from './components/AllDrugs';
import DrugPage from "./components/DrugPage";

function App() {

  return (
      <Router>
          <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/drug/:id" component={DrugPage}/>
        <Route path="/All-Drugs">
            <AllDrugs/>
        </Route>
      </Router>
  );
}

export default App;
