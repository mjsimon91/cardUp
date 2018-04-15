import React from 'react';
import './FoodCard.css';

//Define the foodCard component

const FoodCard = props => {
        return(
            
                <div className="col l3 s12 m3">
                  <div className="card hoverable foodImage">
                    <div className="card-image" data-id={props.id}>
                      <img src={props.image} alt={props.name} onClick={props.onclick}/>
                    </div>
                  </div>
                </div>
              
        )
}


export default FoodCard;