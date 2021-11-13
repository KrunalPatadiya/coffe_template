import logo from './logo.svg';
import './App.css';
import RoutesFile from './components/RoutesFile';
import Coffee_shop from './components/Coffee_shop';
import Slider from './components/Slider';
// import { Router, Routes, Route } from 'react-router-dom';
import Section_6 from './components/Section_6';
import Section_2 from './components/Section_2';
import {
  BrowserRouter,
  Link
} from "react-router-dom";
import Showall_api_data from './components/Showall_api_data';


function App() {
  return (
    <div className="App">
      {/* <Coffee_shop/>
       */}
      {/* <RoutesFile /> */}

      <Showall_api_data />
      {/* <BrowserRouter>
        <Link className="btn btn-success mx-2" to="/">Home</Link>
        <Link className="btn btn-success mx-2" to="/about">About</Link>
        <Link className="btn btn-primary mx-2" to="/dashboard">Dashboard</Link>
        <Link className="btn btn-primary mx-2" to="/maincomponent">Maincontent</Link>

        <RoutesFile />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
