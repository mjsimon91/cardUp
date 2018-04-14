import React from 'react';
import './foodCard.css';

//Define the foodCard component

const FoodCard = props => 
        <img src={props.image} class="img-fluid" alt={props.name}/>

export default FoodCard;