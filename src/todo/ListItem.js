import React from "react";

class ListItem extends React.Component {
  deleteTask(name) {
    this.props.deleteItem(name);
  }

  completedTask(name) {
    this.props.completedTask(name);
  }

  importantTask(name) {
    this.props.importantTask(name);
  }

  render() {
    const completedStyle = {
      fontFamily: "Arial, Helvetica, sans-serif",
      textDecoration: "line-through",
      color: "darkgrey",
    };

    const importantStyle = {
      backgroundColor: "crimson",
      boxShadow: "0 0 5px crimson",
    };

    return (
      <ul>
        {this.props.data.map((element) => {
          return (
            <li className="list-item" key={element.name}>
              <input className="checkbox" type="checkbox" checked={element.done === true} onChange={this.completedTask.bind(this, element.name)} />
              <p style={element.done === true ? completedStyle : null}>{element.name}</p>
              <button className="important" style={element.important === true ? importantStyle : null} onClick={this.importantTask.bind(this, element.name)}>
                ❕
              </button>
              <button className="delete" onClick={this.deleteTask.bind(this, element.name)}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListItem;
