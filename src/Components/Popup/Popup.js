import './Popup.css'

function Popup({setPopup}){
    return(
          <div className="popup_overlay">
            <div className='popup_div'>
                <h3 className='popup_heading navy'>Fill the form in below</h3>
              <form className='popup_form'>
               <div className='name_style'> 
               <div>
               <label className='popup_label navy'>First Name*</label>
               <input type="text"  className='popup_field'/>
               </div>
               <div>             
               <label  className='popup_label navy'>Last Name<span>*</span></label>
               <input type="text"   className='popup_field'/>
               </div> 
               </div>
               <label  className='popup_label navy'>Company*</label>
               <input type="text"  className='popup_field' />
               <label  className='popup_label navy'>Email*</label>
               <input type="text"  className='popup_field'/>
               <label  className='popup_label navy'  >Phone*</label>
               <input type="text"  className='popup_field'/>
               <label  className='popup_label navy' >Industry*</label>
               <input type="text"  className='popup_field'/>
               <label  className='popup_label navy'>Area of Focus[city and state]*</label>
               <input type="text"  className='popup_field'/>
               <div className='popup_button'>
               <button className='button-orange'>Submit</button>
               <button onClick={()=>setPopup(false)} className='button-orange button-gray'>Cancel</button>
               </div>
             </form>
            </div>
          </div>
    )
}

export default Popup