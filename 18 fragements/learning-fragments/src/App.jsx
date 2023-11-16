import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// use case of map method

// map ka matlab conversion
// function App() {

//   let foodItems = ["dal", "paneer", "pualo","soyabean"];

//   return (
//     <React.Fragment>
//       <div>fragments</div>
//       <ul className="list-group">
//         {foodItems.map(item => <li key={item}className="list-group-item">{item}</li>)}
//       </ul>
//       </React.Fragment>
//   );
// }


// conditional rendering 1 ways
// using the if else rendering : poora poora ui par lag raha hai
// function App() {
  
//   // let foodItems = []
//   let foodItems = ["dal", "paneer", "pualo","soyabean"];
  
//   if(foodItems.length == 0) {
//     return <h1> I am still hungry</h1>;
//   }

//   return (
//     <React.Fragment>
//       <div>fragments</div>
//       <ul className="list-group">
//         {foodItems.map(item => <li key={item}className="list-group-item">{item}</li>)}
//       </ul>
//       </React.Fragment>
//   );
// }


// use the ternery operator
// function App() {
  
//   let foodItems = []
//   // let foodItems = ["dal", "paneer", "pualo","soyabean"];

//   return (
//     <React.Fragment>
//       <div>healthy food</div>
//       {foodItems.length == 0 ? <h1> I am still hungry.</h1> : null}
//       <ul className="list-group">
//         {foodItems.map(item => <li key={item}className="list-group-item">{item}</li>)}
//       </ul>
//       </React.Fragment>
//   );
// }


//  third ways
// function App() {
  
//   // let foodItems = [];
//   let foodItems = ["dal", "paneer", "pualo","soyabean"];
  
//   let emptyMessage = foodItems.length == 0 ? <h1> I am still hungry.</h1> : null;
//   return (
//     <React.Fragment>
//       <div>healthy food</div>
//       {emptyMessage};
//       <ul className="list-group">
//         {foodItems.map(item => <li key={item}className="list-group-item">{item}</li>)}
//       </ul>
//       </React.Fragment>
//   );
// }

//  fourth ways = using the logical operator
// based on truthy falsy value 
// null, undefined, empty, 0, NaaN these are falsy value

function App() {
  
  // let foodItems = [];
  let foodItems = ["dal", "paneer", "pualo","soyabean"];

  return (
    <React.Fragment>
      <div>healthy food</div>
      {foodItems.length === 0 && <h3> I am still hungry</h3>}
      <ul className="list-group">
        {foodItems.map(item => <li key={item}className="list-group-item">{item}</li>)}
      </ul>
      </React.Fragment>
  );
}
export default App;

// note each child in its list has its unique key-props
// issne har component unique lagega aur poora baar baar repaint nahi karna padega

// key important hai


// key props bahoot jaroori hai

// condtional rendering = if else, ternery, logical operator