import { Link } from 'react-router-dom'
import './Topnavbar.css'
import '../../images/logo.svg'
import { FaBars } from 'react-icons/fa';


function TopNavbar({logo,setPopup}){
    return(
           <nav className="Topnavbar">
                <div className="Topnavbar-container">
                <div className="Topnavbar-container--left_side">
                    <Link to="/home">
                    <img src={logo} alt="logo rezone" className="logo_image"></img>
                    </Link>
                    
                    <div className='vertical_line'></div>
                     <div>
                        <p className='login_link Data_link'>
                            <Link to="/dashboard" className='login_link'>Rezone Data</Link>
                            </p>
                     </div>
                 </div>
                 <div className="Topnavbar-container--Right_side">
                       <div>
                        <Link to="/login" className='login_link'>Login</Link>
                       </div>
                       <div>
                       <button onClick={()=>setPopup(true)} className="button-orange">Request Acces beta</button>
                       </div>
                    </div>
                </div>
                <div className='menu-icon'>
                        <FaBars/>
                    </div>
            </nav>
    )
}

export default TopNavbar