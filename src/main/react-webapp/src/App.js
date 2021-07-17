import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./components/Home";
import Example from "./components/Example"

function App() {

  return (
      <Router>
        <Route exact path="/" component={Home}/>
          {/*this is just an example of how a route should look like work and should be removed*/}
        <Route exact path="/example" component={Example}/>
      </Router>
  );
}

export default App;
