import AppTodo from "./components/AddTodo";
import AppName from "./components/appName";
import ToDoItems from "./components/todoitems";
import './app.css';

function App() {
  let foods = [
    {
      name : "dal",
      date : "04/04/2002",
    },
    {
      name : "dal",
      date : "04/04/2002",
    },
    {
      name : "dal",
      date : "04/04/2002",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <ToDoItems foodsname={foods}/>
      </center>
    </>
  );
}

export default App;
