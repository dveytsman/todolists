import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    editingIndex: null,
    editingText: "",
  };

  startEditing = (index, text) => {
    this.setState({
      editingIndex: index,
      editingText: text,
    });
  };

  stopEditing = () => {
    const { editingIndex, editingText } = this.state;
    if (editingIndex !== null) {
      this.props.editItem(editingIndex, editingText);
      this.setState({
        editingIndex: null,
        editingText: "",
      });
    }
  };

  handleTextChange = (e) => {
    this.setState({ editingText: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.stopEditing();
    }
  };

  render() {
    const { items, toggleItemCompletion, deleteItem } = this.props;
    const { editingIndex, editingText } = this.state;
    const sortedItems = [...items].sort((a, b) => a.completed - b.completed);

    return (
      <ul className="todo-list">
        {sortedItems.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            editing={editingIndex === index}
            editingText={editingText}
            toggleItemCompletion={() => toggleItemCompletion(index)}
            deleteItem={() => deleteItem(index)}
            startEditing={() => this.startEditing(index, item.text)}
            stopEditing={this.stopEditing}
            handleTextChange={this.handleTextChange}
            handleKeyPress={this.handleKeyPress}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
