import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [{ completed: false }, { completed: true }],
    };
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <ul>
          {items.map((item, index) => {
            return <ToDoItem key={index} item={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
