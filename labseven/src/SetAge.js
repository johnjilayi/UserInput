import { useState } from 'react';


export default function SetAge(props) {
    
    const [newAge, setNewAge] = useState("");

    return (
      <div>
        <div>
          <label for="new_Age">Age:</label>
          <input
            id="new_Age"
            value={newAge}
            onChange={(e) => {
                setNewAge(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              props.setTodoFunction([
                ...props.changeAge,
                { name: newAge }
              ]);
              setNewAge("");
            }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
