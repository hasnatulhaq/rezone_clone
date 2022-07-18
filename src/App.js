import {useState} from "react";
import './App.css';
import LandingPage from './Pages/LandingPage/Landingpage';
import Signin from './Pages/SigninPage/SigninPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TopNavbar from './Components/TopNavbar/Topnavbar';
import Footer from './Components/Footer/Footer';
import logo from '../src/images/logo.svg'
import wlogo from '../src/images/whitelogo.svg'
import Popup from "../src/Components/Popup/Popup";
import DashboardPage from '../src/Pages/DashboardPage/DashboardPage'



function App() {
 
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const togglePopup = () => {
      setIsOpen(!isOpen);
      console.log("toggle popup")
    }


  return ( 
    <div className="App">
            {popup && <Popup setPopup={setPopup}/>}
           <Router>
           <TopNavbar logo={logo} setPopup={setPopup} onClick={togglePopup}/>
          <Routes>
            <Route exact path="/dashboard" element={<DashboardPage/>} />
            <Route exact path="/login" element={<Signin/>} />
            <Route exact path='/home' element={<LandingPage/>}/>
            <Route exact path="/" element={<Navigate to="/home" />} />
          </Routes>
          <Footer logo={wlogo}/> 
        </Router>
    </div>
  );
}

export default App;
