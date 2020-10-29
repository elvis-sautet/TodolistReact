import React, { Component } from "react";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddTodo from "./components/addTodo";
import Header from "./components/layout/header";
import Todos from "./components/Todos";
import About from "./components/pages/About";
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "do home work",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "throw trash",
        completed: true,
      },
      {
        id: uuid.v4(),
        title: "dinner with wife",
        completed: false,
      },
    ],
  };
  //togle completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  //addTodo
  addTodo = (title) => {
    if (!title) return;
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <Router>
        <div className="App container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
