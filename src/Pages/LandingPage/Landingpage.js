import './Landingpage.css'
import AboutCard from "../../Components/AboutCard/AboutCard"
import BottomCard from "../../Components/BottomCard/Bottomcard"
import Buttonorange from "../../Components/Button/Buttonorange"
import CardElements from "../../Components/CardElements/CardElements"
import Greenzone from '../../images/Green-Zone-Parcels.png'
import Distances from '../../images/Distances.png'
import EveryDetail from '../../images/Every-Detail.png'
import SaveTime from '../../images/Save-Time.png'
import QuickAccess from '../../images/Quick-Access.png'
import EasyAnalysis from '../../images/Easy-Analysis.png'
import MultiFormat from '../../images/Multi-Format-Delivery.png'
import Bottombutton from "../../Components/bottombutton/Bottombutton.js";


function LandingPage(){

    
    return(
        <>
        <div>
          <div className="layout_container">
                <div className="svg-1">
                <div className="layout_container__heading">
                <h1 className="heading_text">Capture  <span className="orange">Cannabis Real Estate</span> insights with ease</h1>
                 <p className="description-line">Save your time and money with detailed and up-to-date Cannabis Zoning<br className="break-line"/>
                 and Land Use data in a few quick clicks.</p>
                  <Buttonorange/> 
                </div>
                 <div className="card">
                       <h2 className="card--title">Zone in on what matters </h2>
                       <p className="navy para">Cut to the chase and eliminate the need for sifting through county or municipal GIS data</p>
                       <div className="card--container-row">
                       <CardElements image={Greenzone} text='ReZone is designed to do all the heavy lifting for you. 
                       We capture cannabis zoning and land use data from relevant (yet fragmented) city zoning sources and then 
                       provide these important decision-making data sets for you in one place so you can simply search anywhere 
                       and get results. ' title= "Identify Green Zone Parcels "/>
                       <CardElements image={Distances} reverse  text='
                        More data at your fingertips means you can make better, faster and smarter decisions. 
                        Quickly see how close your identified property is to a variety of sensitive uses. ' title= "Verify Setback Distances"/>
                       <CardElements image={EveryDetail} text='
                        Instead of visiting archaic city websites, or waiting in line at city offices to get zoning information, 
                        you can easily get access to permitted cannabis land uses, parcel zoning data, and setback distances, 
                        all in one place. ' title= "Analyze every detail "/>
                       <CardElements image={EveryDetail} reverse text='Get notifications for proposed and adopted zoning changes across the
                        country directly on the platform. Be the first to know and give yourself the opportunity to be successful. ' title= "Monitor what matters "/>
                       </div>
                 </div>
                 </div>
                <div className="svg-2">
                <div className="homepage-benefits-section">
                    <h1 className="navy">Comprehensive Zoning and Setback Data in one Platform</h1>
                    <p className="navy para">Search for parcels or entire markets, and visualize the available green zone parcels, 
                        quickly identify potential setback issues, and other <br className="break-line"/>
                        insights according to local zoning codes</p>
                        <div className="Aboutcard_container">
                            <AboutCard image={SaveTime} title='Save Time'  description='With a few quick clicks get all the zoning information you require 
                            from a user-friendly platform rather than visiting zoning offices, and reading complicated city zoning codes.'/>
                            <AboutCard image={QuickAccess} title='Quick Access'  description='Rapid access to reports for parcels across the USA, visualizing cannabis zoning maps,
                             setback distances, and development allowances based on zoning codes.'/>
                            <AboutCard image={EasyAnalysis} title='Easy Analysis'  description='Make better and faster decisions with zoning data and tools so you 
                            can easily determine the permitted land use for each cannabis license type.'/>
                            <AboutCard image={MultiFormat} title='Multi-format Delivery'  description='Get zoning and land-use data in multiple formats via our platform. Get built-in reports, 
                            PDFs and CSVs so you can accelerate and maximize your business.'/> 
                        </div>
                </div>
                <div className="card">
                     <h1 className="navy">Start making better zoning decisions today</h1>
                     <div className="card_button">
                     <Buttonorange buttontext='I want a demo' color='#004369'/>
                     <Buttonorange/>
                    </div>
                     <p className="navy para">Getting started with the ReZone Beta release is a quick and easy process. 
                        We pride in making a user-friendly platform for <br className="break-line"/> the industry. </p>
                </div>
                <div className="homepage-benefits-section">
                    <h1 className="navy">How it works</h1>
                    <p className="navy para">With our proprietary technology, we go directly to the source and digitize Zoning 
                        and Cannabis-specific Land Use data, making it available <br className="break-line"/> in multiple formats for all our users.</p>
                        <BottomCard/>
                </div>
                </div>
              </div>
          </div>
          <Bottombutton/>
        </>
    )
}

export default LandingPage