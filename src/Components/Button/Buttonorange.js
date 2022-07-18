import './Buttonorange.css'
import {useState} from "react";

function Buttonorange({buttontext='Request Acces beta', color}){

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
     
        return(
            <button className="button-orange"  style={{backgroundColor: color}}  onClick={togglePopup}>{buttontext}</button>
        )
}                          


export default Buttonorange
