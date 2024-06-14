import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class TodoListContainer extends Component {
  render() {
    const {
      list,
      index,
      addItem,
      editItem,
      deleteItem,
      toggleItemCompletion,
      deleteList,
      startEditingListName,
      stopEditingListName,
      handleListNameChange,
      handleListNameKeyPress,
      editing,
      editingListName,
    } = this.props;

    return (
      <div className="todo-list-container">
        {editing ? (
          <div>
            <input
              type="text"
              value={editingListName}
              onChange={handleListNameChange}
              onKeyPress={handleListNameKeyPress}
              onBlur={stopEditingListName}
              autoFocus
            />
          </div>
        ) : (
          <div>
            <h2 onClick={startEditingListName}>{list.name}</h2>
            <button onClick={() => deleteList(index)}>Delete List</button>
          </div>
        )}
        <TodoInput addItem={(item) => addItem(index, item)} />
        <TodoList
          items={list.items}
          toggleItemCompletion={(itemIndex) =>
            toggleItemCompletion(index, itemIndex)
          }
          editItem={(itemIndex, newText) => editItem(index, itemIndex, newText)}
          deleteItem={(itemIndex) => deleteItem(index, itemIndex)}
        />
      </div>
    );
  }
}

export default TodoListContainer;
