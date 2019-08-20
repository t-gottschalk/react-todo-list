import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.handleComplete.bind(this, id) } checked={ completed ? 'checked': '' }/>{' '}
                    {title}
                    <button onClick={this.props.handleDelete.bind(this, id)} style={{ float: 'right' }}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </p>
            </div>
        )
    }
}

// PropTypes
// TodoItem.PropTypes = {
//     todos: PropTypes.object.isRequired,
//     handleComplete: PropTypes.func.isRequired,
//     handleDeleteTodo: PropTypes.func.isRequired
// }


export default TodoItem;