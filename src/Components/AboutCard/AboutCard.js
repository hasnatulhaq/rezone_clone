import './AboutCard.css'

function AboutCard({image , title , description}){
    return(
            <div className="Card--Container">
                      <img src={image} alt="about" className="About_image"></img>
                      <h3 className="navy">{title}</h3>
                      <p className="Card--Container_Description navy para">
                         {description}
                      </p>  
            </div>
    )

}

export default AboutCard