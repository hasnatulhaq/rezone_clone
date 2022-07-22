import Table from '../Table/Table'
import './CitySubscription.css'


function CitySubscription(){
    return(
           <div className='layouut-d'>
            <div className='citysub'>
            <p>City Subscription</p>
            <div className='citysub-item'>
            <input type="text"></input>
            <input type="text"></input>
            <button className='citysub-btn'>Submit</button>
            </div>
            </div>
           <Table/>
           </div>
    )
}

export default CitySubscription