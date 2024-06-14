import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./ToDoList";
import ListItemInput from "./ListItemInput";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  addItem = (item) => {
    this.setState((prevState) => {
      return { items: [...prevState.items, item] };
    });
  };

  render() {
    return (
      <div>
        <h1> To Do List</h1>
        <ListItemInput addItem={this.addItem} />
        <ToDoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
