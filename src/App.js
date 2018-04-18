import React, { Component } from "react";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import FoodCard from "./components/FoodCard"
import foods from "./food.json"

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array)
    return array
}

class App extends Component {
    // Setting the state to be equal to this.state.food
    state = {
        foods,
        score: 0,
        topScore: 0
    }

    // Map all objects in the food array
    render() {
        return(
            <div>
                <Navbar
                score = {this.state.score}
                topScore = {this.state.topScore}
                 />
                <Wrapper>
                    {this.state.foods.map(food =>(
                        <FoodCard
                        id = {food.id}
                        key = {food.id}
                        name = {food.name}
                        image = {food.image}
                        onclick = {() => this.handleClick(food.id)}
                        />
                    ))
                    }
                </Wrapper>
                
            </div>
        )
    }

    handleClick = (id) => {
        let foodsState = this.state.foods
        let score = this.state.score
        let topScore = this.state.topScore

        foodsState.forEach(element => {
            if (element.id === id) {
                // this is the element that was clicked
                if (element.guessed) {
                    console.log('lost')
                    // lost

                    //Find out if this is the top score
                    if (score >= topScore) {
                        topScore = score
                    } 
                    score = 0
                    alert("You already selected that. Game over")
                    
                    foodsState.forEach(element => {
                      element.guessed = false  
                    })
                } else {
                    // add to score and shuffle
                    element.guessed = true
                    score++
                }
            }
        })

        this.setState({
            score: score,
            foods: shuffleArray(foodsState),
            topScore: topScore
        })
    }
}

export default App