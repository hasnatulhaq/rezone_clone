import './DashboardPage.css'
import {useState} from 'react'
import FindProperty from '../../layout/Findpropertylayout/Findproperty'
import ResetPassword from '../../Components/ResetPassword/ResetPassword'
import DashboardLayout from '../../layout/Dashboardlayout/Dashboardlayout'
import Map from '../../Components/Map/Map'
import Favourites from '../../Components/Favourites/Favourites'
import History from '../../Components/History/History'
import CitySubscription from '../../Components/CitySubscription/CitySubscription'

function DashboardPage(){

    const [active , setActive] = useState("dashboard")
   
    return(
        <div className='Dashboard_layout'>
            <div className='sidenavbar'>
                <div className='sidenavbar-item'>
            <a href="#about" className="sidebarlink" onClick={()=>setActive("dashboard")}>Dashboard</a>
            <a href="#services" className="sidebarlink" onClick={()=>setActive("findproperty")}>Find a Property</a>
            <a href="#clients" className="sidebarlink" onClick={()=>setActive("rezonemap")}>Rezone Map</a>
            <a href="#contact"className="sidebarlink" onClick={()=>setActive("favourites")}>Favourites</a>
            <a href="#contact" className="sidebarlink" onClick={()=>setActive("history")}>History</a>
            <a href="#Contact" className="sidebarlink" onClick={()=>setActive("citysubscription")}>City Subscription</a>
            <a href="#Contact" className="sidebarlink" onClick={()=>setActive("resetpassword")}>Reset Password</a>
            </div>
            </div>
         <div className='Dashboard_card_layout'>
            <div className='Dashboard_card_layout_container'>
                {active === "dashboard" && <DashboardLayout/>}
                {active === "findproperty" && <FindProperty/>}
                {active === "rezonemap" && <Map/>}
                {active === "favourites" && <Favourites/>}
                {active === "history" && <History/>}
                {active === "citysubscription" && <CitySubscription/>}
                {active === "resetpassword" && <ResetPassword/>}
            </div>
             </div>
        </div>
    )
}

export default DashboardPage



