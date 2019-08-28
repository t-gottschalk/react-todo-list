import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './AddTodo.css';

export class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form className='add-todo' onSubmit={this.onSubmit}>
                <input className='p-style'
                    type="text" 
                    name="title"
                    // style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

// PropTypes
// handleAdd.PropTypes = {
//     handleAdd: PropTypes.func.isRequired
// }

export default AddTodo;
