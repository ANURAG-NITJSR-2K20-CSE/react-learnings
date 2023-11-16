import { useState } from "react";
import Item from "./items";

// props are pass as attribute in component of react
function FoodItems({ items }) {
  // let foodItems = ["dal", "paneer", "pualo","soyabean"];
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
      let newItems = [...activeItems, item];
      setActiveItems(newItems);
  }
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item 
          key={item} 
          fooditem={item} 
          bought={activeItems.includes(item)} 
          handleBuyButton={(event) => onBuyButton(item, event)}/>
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
