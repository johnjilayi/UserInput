import { useState } from 'react';


export default function AddTodos(props) {
    const [todoList, setList] = useState("");
    return (
      <div>
        <div>
          <label for="new_List">Name:</label>
          <input
            id="new_List"
            value={todoList}
            onChange={(e) => {
                setList(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              props.setTodoFunction([
                ...props.todoArray,
                { name: todoList }
              ]);
              setList("");
            }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
