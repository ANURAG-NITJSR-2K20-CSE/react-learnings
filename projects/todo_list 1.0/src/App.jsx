import AppTodo from "./components/AddTodo";
import AppName from "./components/appName";
import ToDoItem1 from "./components/todoitem1";
import ToDoItem2 from "./components/todoitem2";
import './app.css';

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <div className="item-container">
        <ToDoItem1 />
        <ToDoItem2 />
        </div>
      </center>
    </>
  );
}

export default App;
