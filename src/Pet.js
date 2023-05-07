import React from "react";
import { Link } from "react-router-dom";

const Pet = (props) => {
  
  const {name, animal , breed, location , id , images} = props;
  let petImage = "http://pets-images.dev-apis.com/pets/none.jpg";
  if(images.length){
    petImage = images[0]
  }

  return (
    <Link  to={`/details/${id}`} className="pet">
    <div className="image-container">
    <img src={petImage} alt={name} />
    </div>
    <div className="info">
     <h1>{name}</h1> 
     <h2>{`${animal} — ${breed} — ${location}`}</h2>
    </div>
    </Link>
  )
  
}

export default Pet;
