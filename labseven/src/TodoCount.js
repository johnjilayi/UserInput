export default function TodoCount(props) {
    return (
      <div>
        <div>A total of {props.todoList.length} list have been registered</div>
      </div>
    );
  }