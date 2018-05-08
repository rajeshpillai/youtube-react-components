import React, { Component } from 'react';
import withModal from './components/HOC/withModal';
import TodoItem from './features/todo/todo-item';
import './appwithmodal.css';

export default class AppWithModal extends Component {
  state = {
    todos: [
      {id: 1, title: "Learn React"},
      {id: 2, title: "Learn Angular"},
      {id: 3, title: "Learn Vue"},
      {id: 4, title: "Learn Node"},
      {id: 5, title: "Learn MongoDB"},
      {id: 6, title: "Learn GraphQL"},
      {id: 7, title: "Learn Redux"},
      {id: 8, title: "Learn .NET Core"},
    ]
  }

  render() {
    let taskUI = this.state.todos.map((todo) => {
      let TodoItemWithModal = withModal(TodoItem);
      return (
         <TodoItemWithModal key={todo.id} todo={todo} />
      );
    });

    return (
      <div>
         <h2>HOC - Modal Dialog Demo</h2>
         <div className="todo-list">
          {taskUI}
         </div>
      </div>
    );
  }
}