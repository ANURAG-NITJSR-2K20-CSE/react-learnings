// import "./../App.css"; normal way to import
import styles from "./items.module.css"

// 1 ways props as parameter

// const Item = (props) => {
//   return (
//     <li key={item} className="list-group-item">
//       {item}
//     </li>
//   );
// };


// const Item = (props) => {
//     return (
//       <li key={props.fooditem} className="list-group-item">
//         {props.fooditem}
//       </li>
//     );
//   };


// 2nd way as array destructuring
// const Item = (props) => {
//     const {fooditem} = props;
//     return (
//       <li key={fooditem} className="list-group-item">
//         {fooditem}
//       </li>
//     );
//   };

// third way to pass the props in the component


// first way to call event

// const Item = ({fooditem}) => {
//   const handleBuyButtonClicked = (fooditem) => {
//     console.log(`${fooditem} being bought`);
//   }
//     return (
//       <li key={fooditem} className={`${styles["kg-items"]} list-group-item`}>
//         <span className={styles["kg-span"]}>{fooditem}</span>
//         <button type="button" className={` ${styles.kgButton} btn btn-primary`} onClick={()=> handleBuyButtonClicked(fooditem)}>buy</button>
//       </li>
      
//     );
//   };

// anonymous fucntion by the help of refernece
// 1 ay direct method
// bahar bhi kar sakte hai


// const Item = ({fooditem}) => {
//   const handleBuyButtonClicked = () => {
//     console.log(`${fooditem} being bought`);
//   }
//     return (
//       <li key={fooditem} className={`${styles["kg-items"]} list-group-item`}>
//         <span className={styles["kg-span"]}>{fooditem}</span>
//         <button type="button" className={` ${styles.kgButton} btn btn-primary`} onClick={handleBuyButtonClicked}>buy</button>
//       </li>
      
//     );
//   };

// event bhi add kar sakte hai
const Item = ({fooditem,bought,handleBuyButton}) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${fooditem} being bought`);
  // }
    return (
      <li key={fooditem} className={`${styles["kg-items"]} list-group-item ${bought && 'active'}`}>
        <span className={styles["kg-span"]}>{fooditem}</span>
        <button type="button" className={` ${styles.kgButton} btn btn-primary`} onClick={handleBuyButton}>buy</button>
      </li>
      
    );
  };

  // event react generate kar raha hai synthetic base event

export default Item;
