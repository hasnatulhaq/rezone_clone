import './Sidebar.css'



function Sidebar({setActive}){
    return(
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
    )
}

export default Sidebar