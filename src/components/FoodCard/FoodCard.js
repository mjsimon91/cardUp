import React from 'react';
import './FoodCard.css';

//Define the foodCard component

const FoodCard = props => {
        return(
            
                //<div className="col l3 s12 m3 foodImage">
                  //<div className="card hoverable">
                    //<div className="card-image" data-id={props.id}>
                      <img className="col l3 s12 m3 hoverable foodImage" src={props.image} alt={props.name} onClick={props.onclick}/>
                //     </div>
                //   </div>
                // </div>
              
        )
}


export default FoodCard;