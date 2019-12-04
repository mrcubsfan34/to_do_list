import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    // well take the new task up and pass it to the parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }
  
  render() {
    let result;
    if(this.state.isEditing) {
      result = (
        <div className="ToDo">
          <form className="ToDo-edit-form" onSubmit={this.handleUpdate}>
            <input 
              type="text" 
              value={this.state.task} 
              name="task" 
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="ToDo-buttons">
          <button onClick={this.toggleForm}>
            <i class="fas fa-pen" />
          </button>
          <button onClick={this.handleRemove}>
            <i class="fas fa-trash" />
          </button>
        <li className={this.props.completed ? 'ToDo-task complete' : "ToDo-task"} onClick={this.handleToggle}>
          {this.props.task}
        </li>
      </div>
      )
    }
    return result;
  }
}

export default ToDo;