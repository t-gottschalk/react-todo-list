import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';

// Importing React-Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Todos from './components/Todos/Todos';
import AddTodo from './components/AddTodo/AddTodo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
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
  // Note above, 'handleComplete(id)' = 'markComplete()'

  handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }
  // Note above, 'handleDelete(id)' = 'delTodo()'

  handleAdd = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }
  // Note above, 'handleAdd(title)' = 'addTodo()'

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo handleAdd={this.handleAdd} />
                <Todos todos={this.state.todos} handleComplete = {this.handleComplete} handleDelete={this.handleDelete}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;