import Item from "./items";

// props are pass as attribute in component of react
function FoodItems({ items }) {
  // let foodItems = ["dal", "paneer", "pualo","soyabean"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} fooditem={item} />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
