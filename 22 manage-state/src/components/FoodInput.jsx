import styles from "./FoodInput.module.css";

// let FoodInput = () => {
    
//     // 1st way
//     const handleOnChange = (event) => {
//         console.log(event.target.value);
//     }
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="enter the favourite food item"
//         className={styles.FoodInput}
//         // 2nd way
//         onChange={(event) => console.log(event.target.value)}
//       />
//     </>
//   );
// };


// anonymouse way 
let FoodInput = ({handleOnKeyDown}) => {
    
    // 1st way
    // const handleOnChange = (event) => {
    //     console.log(event.target.value);
    // }
  return (
    <>
      <input
        type="text"
        placeholder="enter the favourite food item"
        className={styles.FoodInput}
        // 2nd way
        onKeyDown={handleOnKeyDown}
      />
    </>
  );
};

export default FoodInput;
