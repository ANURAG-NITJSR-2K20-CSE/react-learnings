import ToDoItem from "./todoitem";
import styles from "./todoitems.module.css"

export default function ToDoItems({ foodsname }) {
  return (
  <div className={styles.itemsContainer}>
      {foodsname.map((item) => (
        <ToDoItem  name1={item.name} date1={item.date}/>
      ))}
    </div>
  );
};
