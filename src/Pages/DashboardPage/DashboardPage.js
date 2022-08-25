import './DashboardPage.css'
import {useState} from 'react'
import FindProperty from '../../layout/Findpropertylayout/Findproperty'
import ResetPassword from '../../Components/ResetPassword/ResetPassword'
import DashboardLayout from '../../layout/Dashboardlayout/Dashboardlayout'
// import Map from '../../Components/Map/Map'
import Favourites from '../../Components/Favourites/Favourites'
import History from '../../Components/History/History'
import CitySubscription from '../../Components/CitySubscription/CitySubscription'
import Sidebar from '../../Components/Sidebar/Sidebar'
// import GoogleMaps from '../../Components/Googlemaps/Googlemaps'
import MapLeaf from '../../Components/leaflet/Leafletmaps'
// import Root from '../../Components/MapComponent/MyMapComponent'

function DashboardPage(){

    const [active , setActive] = useState("dashboard")
   
    return(
        <div className='Dashboard_layout'>
            <Sidebar setActive={setActive}/>
         <div className='Dashboard_card_layout'>
            <div className='Dashboard_card_layout_container'>
                {active === "dashboard" && <DashboardLayout/>}
                {active === "findproperty" && <FindProperty/>}
                {/* {active === "rezonemap" && <Root/>} */}
                {active === "rezonemap" && <MapLeaf/>}
                {/* {active === "rezonemap" && <GoogleMaps/>} */}
                {/* {active === "rezonemap" && <Map/>} */}
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



