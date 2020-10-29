import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  state = {};
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "2px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      borderBottom: "1px #ccc dotted",
    };
  };
  markComplete = () => {
    console.log(this.props);
  };
  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            className="mr-1"
            onChange={this.props.markComplete.bind(this, id)}
            type="checkbox"
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            &times;
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.prototypes = {
  todo: PropTypes.object.isRequired,
};
const btnStyle = {
  background: "red",
  border: "none",
  color: "white",
  padding: "5px 9px",
  borderRadius: "50%",
  float: "right",
  cursor: "pointer",
};

export default TodoItem;
