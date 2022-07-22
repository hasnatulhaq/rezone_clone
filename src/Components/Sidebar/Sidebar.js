import './Sidebar.css'
import {FaDashcube
    ,FaSearchLocation , 
    FaMap, FaStar, FaHistory , FaDollarSign , FaLock} from 'react-icons/fa';


function Sidebar({setActive}){
    return(
        <div className='sidenavbar'>
        <div className='sidenavbar-item'>
    <a href="#about" className="sidebarlink" onClick={()=>setActive("dashboard")}><FaDashcube/>Dashboard</a>
    <a href="#services" className="sidebarlink" onClick={()=>setActive("findproperty")}><FaSearchLocation/>Find a Property</a>
    <a href="#clients" className="sidebarlink" onClick={()=>setActive("rezonemap")}><FaMap/>Rezone Map</a>
    <a href="#contact"className="sidebarlink" onClick={()=>setActive("favourites")}><FaStar/>Favourites</a>
    <a href="#contact" className="sidebarlink" onClick={()=>setActive("history")}><FaHistory/>History</a>
    <a href="#Contact" className="sidebarlink" onClick={()=>setActive("citysubscription")}><FaDollarSign/>City Subscription</a>
    <a href="#Contact" className="sidebarlink" onClick={()=>setActive("resetpassword")}><FaLock/>Reset Password</a>
    </div>
    </div>
    )
}

export default Sidebar