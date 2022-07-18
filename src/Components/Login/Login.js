import './Login.css'
import { useNavigate , Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function Login(){

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    let navigate = useNavigate();
         

const handlelogin = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", {
        Email,
        Password,
      })
      .then((res) => {
        if (res.status === 200) {
        //   setIsLoggedIn(res.data.data.accessToken);
        //   localStorage.setToken({
        //     accessToken: res.data.data.accessToken,
        //     refreshToken: res.data.data.refreshToken,
        //   });
          navigate(`/dashboard`);
        } else {
        //   setIsLoggedIn(false);
        }
      })
      .catch((err) =>{
        console.log(err)
      } );
  };



    return(
           <div className="login_layout">
           <div className="login_Container">
            <div className="login_div">
            <div className="">
                   <h2>We're glad to have you!</h2>
                   <p className='login_description'><span className='description_text'>Not a member?</span><Link to="/signup">Signup!</Link></p>
               </div>
               <div>
               <form>
                <div> 
                <input 
                type="text"  
                className='login_form_field' 
                placeholder="Email Address"
                name="email"
                id="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}/>
                </div>
               <div>
               <input 
               type="password"  
               className='login_form_field' 
               placeholder="Password"
               id="password"
               value={Password}
               onChange={(e) => setPassword(e.target.value)}
               />
               </div>
               <div className='login_bottom_section'>
               <p>Forget Password?</p>
                <button className="login_btn" type="Submit" onClick={handlelogin}>
            Login
          </button>
                </div>
               </form>
               </div>
            </div>
           </div>
           </div>
    )
}

export default Login