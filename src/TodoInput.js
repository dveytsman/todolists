import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.trim() !== "") {
      this.props.addItem(this.state.input);
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todo-input">
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Add a new task"
          className="input-field"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    );
  }
}

export default TodoInput;
