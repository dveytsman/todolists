import React from "react";

class ListItemInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleInput = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim() != "") {
      this.props.addItem(this.state.value);
      this.setState({ value: "" });
    }
  };

  componentDidUpdate() {
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleInput}
            placeholder="add new item"
          />
        </form>
        <button type="submit" onClick={this.handleSubmit}>
          Add
        </button>
      </div>
    );
  }
}

export default ListItemInput;
