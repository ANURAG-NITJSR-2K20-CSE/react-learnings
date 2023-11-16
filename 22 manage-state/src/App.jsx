import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/fooditems";
import ErrorMessage from "./components/ErrorMessages";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
// this is parent ->child flow of data => one way comminication
function App() {
  // let foodItems = [];
  // let foodItems = ["dal", "paneer", "pualo", "soyabean"];
  // props ko bhejna hai
  

  // use state return the aray with two value curent_value and method

  // 1st way
  // let textStateArr= useState();
  // let textStateVal = textStateArr[0];
  // let setTextState = textSateArr[1];

  // let textStateArr= useState("food item is enter by user");
  // // in case of passing null as initiaal value nothing seen
  // let textStateVal = textStateArr[0];
  // let setTextState = textStateArr[1]; // this method is used to change the initial value of variable
  // console.log(`curent value of state : ${textStateVal}`);
 

   // this method is used to change the initial value of variable
  let [textToShow, setTextState] = useState("food item is enter by user");
  console.log(`curent value of state : ${textToShow}`);
  

  // let foodItems = ["dal", "paneer", "pualo", "soyabean"];


  let [foodItems, setFoodItems] = useState([
    "salad",
    "Green Vegetable",
    "Roti",
  ]);



  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  //   setTextState(event.target.value);
  // };


  const handleOnKeyDown = (event) => {
    if(event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      console.log('food value entered is ' + newFoodItem);
      // hamesha naya array banana chaiye wahi neeche banaye hai
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };


  return (
    <>
      {/* child props kthrough koi bhi component ko js me bhej sakte hai */}
      {/* 1 container banao aur reuse karo a generic banalo */}
      <Container>
        <div>
          <h1 className="food-heading">healthy food</h1>
        </div>
        
        <FoodInput handleOnKeyDown={handleOnKeyDown} />
        {<ErrorMessage items={foodItems} />}
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
      <p>above is the list of healthy foods that are good for your healthy and well beings</p>
    </Container> */}
    </>
  );
}
export default App;

// note each child in its list has its unique key-props
// issne har component unique lagega aur poora baar baar repaint nahi karna padega

// key important hai

// key props bahoot jaroori hai

// condtional rendering = if else, ternery, logical operator
