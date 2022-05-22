import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from "@material-ui/core";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreateVideo from "./createVideo"
import Mainpage from './mainpage';




function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
          <Route path="/createvideo" element={<CreateVideo/>} />
          <Route path="/" element={<Mainpage/>} />
          </Routes>
        </div>

      </Router>
    </div>

  );
}

export default App;
