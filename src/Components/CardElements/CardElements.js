import './cardelments.css'

function CardElements({title,reverse=false , image , text = " "}){
    return(
            <div style={{flexDirection: `${reverse ? 'row-reverse': ''}`}} className="Card--elements">
                     <div className="card--elements-image">
                           <img src={image} alt="Green zone" className="image_style"/>
                     </div>
                     <div className="card--elements-text">
                            <h3 className="card--elements-text__title navy">{title} </h3>
                            <p className="navy">
                            {text}
                            </p>
                     </div>
            </div>
    )

}

export default CardElements