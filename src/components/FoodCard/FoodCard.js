import React from 'react';
import './FoodCard.css';

//Define the foodCard component

const FoodCard = props => {
        return(
                <img className="hoverable foodImage z-depth-3" src={props.image} alt={props.name} onClick={props.onclick}/>      
        )
}

export default FoodCard;