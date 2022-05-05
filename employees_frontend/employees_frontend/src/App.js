import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterCompnent from './components/FooterCompnent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path='/' component={ListEmployeeComponent} ></Route>
              <Route path='/employees' component={ListEmployeeComponent} ></Route>

              <ListEmployeeComponent />
            </Switch>
          </div>
          <FooterCompnent />
      </Router>
    </div>

  );
}

export default App;
