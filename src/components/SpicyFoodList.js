import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");
  const foodsToDisplay = foods.filter((food)=>{
    if(filterBy === "All"){
      return true;
    }
    else{
      return food.cuisine === filterBy;
    }
  })
function handleFilterChange(event){
  setFilterBy(event.target.value);
  
}
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
    console.log(newFood);
    setFoods(newFoodArray);
    
    
  }
  function handleLiClick (id){
    const newFoodArray = foods.filter((food)=> food.id !== id);
    setFoods(newFoodArray);
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>add Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>

    </div>
  );
}

export default SpicyFoodList;
