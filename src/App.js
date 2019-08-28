import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import axios from 'axios';
import uuid from 'uuid';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=1')
      .then(res => this.setState({ todos: res.data }));
  }
  
  handleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id)
          todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  handleAdd = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <br />
        <AddTodo handleAdd={this.handleAdd} />
        <Todos 
          todos={this.state.todos} 
          handleComplete = {this.handleComplete} 
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
