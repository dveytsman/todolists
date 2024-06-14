import React, { Component } from "react";
import ListInput from "./ListInput";
import TodoListContainer from "./TodoListContainer";
import "./App.css";

class App extends Component {
  state = {
    lists: [],
    editingListIndex: null,
    editingListName: "",
  };

  addList = (listName) => {
    this.setState((prevState) => ({
      lists: [...prevState.lists, { name: listName, items: [] }],
    }));
  };

  startEditingListName = (index, name) => {
    this.setState({
      editingListIndex: index,
      editingListName: name,
    });
  };

  stopEditingListName = () => {
    const { editingListIndex, editingListName, lists } = this.state;
    if (editingListIndex !== null) {
      const newLists = [...lists];
      newLists[editingListIndex].name = editingListName;
      this.setState({
        lists: newLists,
        editingListIndex: null,
        editingListName: "",
      });
    }
  };

  handleListNameChange = (e) => {
    this.setState({ editingListName: e.target.value });
  };

  handleListNameKeyPress = (e) => {
    if (e.key === "Enter") {
      this.stopEditingListName();
    }
  };

  deleteList = (index) => {
    const newLists = [...this.state.lists];
    newLists.splice(index, 1);
    this.setState({ lists: newLists });
  };

  addItem = (listIndex, item) => {
    const newLists = [...this.state.lists];
    newLists[listIndex].items.push({ text: item, completed: false });
    this.setState({ lists: newLists });
  };

  editItem = (listIndex, itemIndex, newText) => {
    const newLists = [...this.state.lists];
    newLists[listIndex].items[itemIndex].text = newText;
    this.setState({ lists: newLists });
  };

  deleteItem = (listIndex, itemIndex) => {
    const newLists = [...this.state.lists];
    newLists[listIndex].items.splice(itemIndex, 1);
    this.setState({ lists: newLists });
  };

  toggleItemCompletion = (listIndex, itemIndex) => {
    const newLists = [...this.state.lists];
    newLists[listIndex].items[itemIndex].completed =
      !newLists[listIndex].items[itemIndex].completed;
    this.setState({ lists: newLists });
  };

  render() {
    const { lists, editingListIndex, editingListName } = this.state;

    return (
      <div className="app">
        <h1>To-Do List Manager</h1>
        <ListInput addList={this.addList} />
        <div className="lists-container">
          {lists.map((list, index) => (
            <TodoListContainer
              key={index}
              index={index}
              list={list}
              addItem={this.addItem}
              editItem={this.editItem}
              deleteItem={this.deleteItem}
              toggleItemCompletion={this.toggleItemCompletion}
              deleteList={this.deleteList}
              startEditingListName={() =>
                this.startEditingListName(index, list.name)
              }
              stopEditingListName={this.stopEditingListName}
              handleListNameChange={this.handleListNameChange}
              handleListNameKeyPress={this.handleListNameKeyPress}
              editing={editingListIndex === index}
              editingListName={editingListName}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
