import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterCompnent from './components/FooterCompnent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListEmployeeComponent />
      </div>
      <FooterCompnent />
    </div>

  );
}

export default App;
