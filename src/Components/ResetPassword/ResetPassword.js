import "./ResetPassword.css"


function ResetPassword(){
    return(
        <div className="layouut-d">
         <div className="resetpassword-container">
            <div className="resetpassword-layout">
                <h1 className="resetpassword-heading">Reset password</h1>
                <div className="resetpassword-form">
                <div className="resetpassword-field-container">
                <label  className='popup_label navy'>Current Password</label>
                <input type='text' className='resetpassword-field' placeholder='current password'/>
                </div>
                <div className="resetpassword-field-container">
                <label  className='popup_label navy'>New Password</label>
                <input type='text' className='resetpassword-field' placeholder='New password'/>
                </div>
                <div className="resetpassword-field-container">
                <label  className='popup_label navy'>Retype Password</label>
                <input type='text' className='resetpassword-field' placeholder='Retype New password'/>
                </div>
                </div>
                <div>
                    <button className="update-button-style">Update</button>
                </div>
                </div>
            </div>
            </div>
    )
}


export default ResetPassword