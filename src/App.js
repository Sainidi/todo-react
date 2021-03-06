import React from "react";
import "./scss/app.scss";
import ListItem from "./todo/ListItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "Learn JS", done: false, important: false },
        { name: "Learn CSS", done: true, important: false },
        { name: "Learn HTML", done: false, important: false },
        { name: "Learn English", done: false, important: false },
      ],
      inputValue: "",
    };
    this.completedTask = this.completedTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.importantTask = this.importantTask.bind(this);
  }

  addTask() {
    if (!this.state.inputValue) return;
    this.setState({
      list: [
        ...this.state.list,
        {
          name: this.state.inputValue,
          done: false,
        },
      ],
      inputValue: "",
    });
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  deleteItem(name) {
    const data = this.state.list.filter((element) => element.name !== name);
    this.setState({
      list: data,
    });
  }

  completedTask(name) {
    const App = [];
    this.state.list.forEach((element, index) => {
      if (element.name === name) {
        const item = this.state.list[index];
        App.push(Object.assign({}, item, { done: item.done === true ? false : true }));
        this.setState({
          list: App,
        });
      } else {
        App.push(element);
      }
    });
  }

  importantTask(name) {
    const App = [];
    this.state.list.forEach((element, index) => {
      if (element.name === name) {
        const item = this.state.list[index];
        App.push(Object.assign({}, item, { important: item.important === true ? false : true }));
        this.setState({
          list: App,
        });
      } else {
        App.push(element);
      }
    });
  }

  render() {
    return (
      <div className="todo-list">
        <header className="header">React todo list</header>
        <ListItem data={this.state.list} completedTask={this.completedTask} deleteItem={this.deleteItem} importantTask={this.importantTask} />
        <footer>
          <input className="text" type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button className="add-todo" onClick={this.addTask}>
            ??????
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
