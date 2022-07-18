import "./Findproperty.css"
import DashboardSearch from '../../Components/DashboardSearch/DashboardSearch'
import findproperty from '../../images/find-a-property.png'


function FindProperty(){
    return(
        <>
         <div className='findproperty'>
                <h1 className='findproperty-heading'>Search for a suitable property</h1>
            <DashboardSearch/>
              <img src={findproperty} alt="find a property" className="findpropertyimage"></img>
            </div> 
        </>
    )
}

export default FindProperty