
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route path="/about">
          <About/>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

