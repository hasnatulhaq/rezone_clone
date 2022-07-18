import "./ResetPassword.css"


function ResetPassword(){
    return(
         <div className="resetpassword-container">
            <div className="resetpassword-layout">
                <h1 className="resetpassword-heading">Reset password</h1>
                <div className="resetpassword-form">
                <div className="resetpassword-field-container">
                <label  className='popup_label navy'>Current Password</label>
                <input type='text' className='resetpassword-field' placeholder='Enter an address to get zoning details'/>
                </div>
                <div className="resetpassword-field-container">
                <label  className='popup_label navy'>New Password</label>
                <input type='text' className='resetpassword-field' placeholder='Enter an address to get zoning details'/>
                </div>
                <div className="resetpassword-field-container">
                <label  className='popup_label navy'>Retype Password</label>
                <input type='text' className='resetpassword-field' placeholder='Enter an address to get zoning details'/>
                </div>
                </div>
                <div>
                    <button className="update-button-style">Update</button>
                </div>
                </div>
            </div>
    )
}


export default ResetPassword