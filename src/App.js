import React, { Component } from "react";
import FoodCard from "./components/foodCards/foodCards"
import foods from "./food.json"

class App extends Component {
    // Setting the state to be equal to this.state.food
    state = {
        foods
    }

    // Map all objects in the food array
    render() {
        return(
            <div>
                {this.state.foods.map(food =>(
                    <FoodCard
                    id = {food.id}
                    key = {food.id}
                    name = {food.name}
                    image = {food.image}
                    />
                ))
            }
            </div>
            
        )
    }
}

export default App