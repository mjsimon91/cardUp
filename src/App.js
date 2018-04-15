import React, { Component } from "react";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import FoodCard from "./components/FoodCard"
import foods from "./food.json"

function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
  
    return array;
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
                    // lost

                    //Find out if this is the top score
                    if (score >= topScore) {
                        topScore = score
                    } 
                    score = 0
                    alert("You already selected that. Game over")
                } else {
                    // add to score and shuffle
                    element.guessed = true
                    score++
                    foodsState = foods
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