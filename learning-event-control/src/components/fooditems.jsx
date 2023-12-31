import Item from "./items";

// props are pass as attribute in component of react
function FoodItems({ items }) {
  // let foodItems = ["dal", "paneer", "pualo","soyabean"];
  const handleBuyButton = (event) => {
    console.log(event);
    console.log(`${items} being bought`);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} fooditem={item} handleBuyButton={handleBuyButton} />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
