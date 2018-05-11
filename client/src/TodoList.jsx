import React, {component} from 'react';

import todo form './Todo.jsx';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      todoList: [],
    }
    // do your binding in the constructor;
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    const todoList = this.state.todoList;
    todoList.push(this.state.todo);
    this.setState({ todoList: todoList })
  }

  deleteTodo() {
    const todoList = this.state.todoList;
    todoList = this.splice(index, 1);
  }

  render() {
    return(
      <div>
        <h1>My Todo List</h1>
        <form  onSubmit={(event) => this.handleSubmit(event)}>
          Add todo: <input/>
          <button>Submit</button>
        </form>
        <div>
          {
            this.state.todoList.map((todo, index) => {
              return <Todo todo={todo}>
            });
          }
        </div>
      </div>
    )
  }
}

export default TodoList;
