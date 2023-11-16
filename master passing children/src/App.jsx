import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/fooditems";
import ErrorMessage from "./components/ErrorMessages";
import Container from "./components/Container";
// this is parent ->child flow of data => one way comminication
function App() {
  // let foodItems = [];
  let foodItems = ["dal", "paneer", "pualo", "soyabean"];
  // props ko bhejna hai
  return (
    <>
    {/* child props kthrough koi bhi component ko js me bhej sakte hai */}
    {/* 1 container banao aur reuse karo a generic banalo */}
    <Container>
      <div><h1 className="food-heading">healthy food</h1></div>
      {<ErrorMessage items={foodItems} />}
      <FoodItems items={foodItems} />
    </Container>
    
    <Container>
      <p>above is the list of healthy foods that are good for your healthy and well beings</p>
    </Container>
    </>
    
  );
}
export default App;

// note each child in its list has its unique key-props
// issne har component unique lagega aur poora baar baar repaint nahi karna padega

// key important hai

// key props bahoot jaroori hai

// condtional rendering = if else, ternery, logical operator
