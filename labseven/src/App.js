

// import ButtonsContainer from "./ButtonsContainer";
import TodoCount from "./TodoCount";
import Todos from "./Todos";
import AddTodos from "./AddTodos";

import { useState } from "react";

export default function App() {
  const mySharedMethod = () => {
    alert("Yay, It works!");
  };

  const [todos, setList] = useState([]);
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }


  return (
    <div className="App">



       <TodoCount todoList={todos} />

       <Todos todoList={todos} />

       <AddTodos todoArray={todos} setTodoFunction={setList} />

       <h1>Count: {count}</h1>

      <Button onClick={increment}>Plus 1</Button>
      <Button onClick={decrement}>Minus 1</Button>

    </div>
  );


  function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
  }
  
}