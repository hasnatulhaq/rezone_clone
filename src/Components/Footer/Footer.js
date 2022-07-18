import './Footer.css'
import { FaTwitter , FaLinkedin } from 'react-icons/fa';


function Footer({logo}){
    return(
            <div className="Footer">
                  <div className="Footer--top-section">
                         <div className="Container">
                          <img src={logo} alt="svg" className="Footer-image logo_width"></img>
                              <div className="social-icon">
                              <p><FaTwitter/></p>
                              <p><FaLinkedin/></p>
                              </div>
                         </div>
                  </div>
                  <div className="Footer--middle-section">
                        <div className="Container">
                        <div className="list-Container">
                        <ul className="list-style">
                              <li><h3 className='list_heading'>Helpful Links</h3></li>
                              <li className='list-items'>Contact</li>
                              <li className='list-items'>Privacy Policy</li>
                              <li className='list-items'>Terms of Use</li>
                             </ul>
                             <ul className="list-style">
                              <li><h3 className='list_heading'>Account</h3></li>
                              <li className='list-items'>Log In</li>
                             </ul>
                        </div>
                        </div>
                    </div>
                  <div className="Footer--bottom-section">
                    <span className='copyright-text'>© 2022 <strong className='company_name'> REZONE.</strong> All Rights Reserved.</span>
                  </div>
            </div>
    )
}

export default Footer