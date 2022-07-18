import './Bottomcard.css'
import Howitwork from '../../images/How-It-Works.png'

function BottomCard(){
    return(
             <div className="Bottomcard_container">
                  <div className="Bottomcard_container_image">
                    <img src={Howitwork} alt="How it work" className='Bt-image'></img>
                    </div>
                  <div className="Bottomcard_container_text navy">
                      <p className="bottom_paragraph">
                      Our teams have a deep knowledge of the relationship between cannabis business regulation and 
                      the real estate sector. With this knowledge and the support of our clients, we have developed our proprietary
                       platform to meet the exacting data requirements, report formats, and compliance standards for this promising boom. 
                      </p>
                      <br/>
                      <p className="bottom_paragraph">
                      Our platform is built on the foundations of Artificial Intelligence
                      and Machine Learning algorithms that can intelligently collect, rationalize and categorize vast streams of real estate data layers, 
                      with a focus on cannabis-related data. This data is then provided to our users in a business-ready format. 
                      </p>
                  </div>
             </div>
    )
}


export default BottomCard