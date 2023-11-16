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
const Item = ({fooditem}) => {
    return (
      <li key={fooditem} className={`${styles["kg-items"]} list-group-item`}>
        <span className={styles["kg-span"]}>{fooditem}</span>
      </li>
    );
  };


export default Item;
