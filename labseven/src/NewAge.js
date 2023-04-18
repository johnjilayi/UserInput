
export default function NewAge(props) {
    return (
      <div>
        {props.newAge.map((age) => (
          <div>
            {/* <div>A total of {props.today.length} list have been registered</div> */}
            {age.name} is my new Age
          </div>
        ))}
      </div>
    );
  }