
export default function Todos(props) {
    return (
      <div>
        {props.todoList.map((list) => (
          <div>
            {list.name} is part of list
          </div>
        ))}
      </div>
    );
  }