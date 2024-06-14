import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const {
      item,
      editing,
      editingText,
      toggleItemCompletion,
      deleteItem,
      startEditing,
      stopEditing,
      handleTextChange,
      handleKeyPress,
    } = this.props;

    return (
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={toggleItemCompletion}
        />
        {editing ? (
          <input
            type="text"
            value={editingText}
            onChange={handleTextChange}
            onKeyPress={handleKeyPress}
            onBlur={stopEditing}
            autoFocus
          />
        ) : (
          <span onClick={startEditing}>{item.text}</span>
        )}
        <button onClick={deleteItem}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
