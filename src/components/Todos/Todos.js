import React, { Component } from "react";
import TodoItem from '../TodoItem/TodoItem';
import './Todos.css';
// import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
        <TodoItem 
        	key={todo.id} 
        	todo = {todo} 
        	handleComplete={this.props.handleComplete} 
        	handleDelete={this.props.handleDelete}
        />
    ));
  }
}

// PropTypes
// Todos.PropTypes = {
//     todos: PropTypes.array.isRequired,
//     handleComplete: PropTypes.func.isRequired,
//     handleDelete: PropTypes.func.isRequired
// }

export default Todos;
