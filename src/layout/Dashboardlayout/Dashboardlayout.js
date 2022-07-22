import "./Dashboardlayout.css"
import DashboardSearch from "../../Components/DashboardSearch/DashboardSearch";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import Table from "../../Components/Table/Table"
import {FaSearch} from 'react-icons/fa';



function DashboardLayout(){

    let addresssearches=150,mapclicks=114,summaryreports=7;
    return(
        <div className="layouut-d">
        <DashboardSearch/>
                <div className='card-div'>
                    <div className='card-div-item'>
                    <DashboardCard title="Address Searches" counter={addresssearches} icon={<FaSearch/>}/> 
                    </div>
                    <div className='card-div-item' >
                    <DashboardCard title="Map Clicks" counter={mapclicks} /> 
                    </div>
                    <div className='card-div-item'>
                    <DashboardCard title="Summary Reports" counter={summaryreports}/> 
                    </div>
                </div>
                <Table title="Recent Zoning Searches"/>
                <Table title="Recent Summary Reports"/>
     </div>
    )
}


export default DashboardLayout