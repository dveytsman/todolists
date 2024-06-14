import React, { Component } from "react";

class ListInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: "",
    };
  }

  handleChange = (e) => {
    this.setState({ listName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.listName.trim() !== "") {
      this.props.addList(this.state.listName);
      this.setState({ listName: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="list-input">
        <input
          type="text"
          value={this.state.listName}
          onChange={this.handleChange}
          placeholder="New list name"
          className="input-field"
        />
        <button type="submit" className="add-button">
          Add List
        </button>
      </form>
    );
  }
}

export default ListInput;
