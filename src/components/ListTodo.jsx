import React from 'react'
import { connect } from "react-redux"
import {deleteTodo} from "../actions/Action"

const ListTodo = (props) => {
  return (
      <ul>
          {
              props.todos.map((todo, index) => (
                  <li key={index}>{ todo.massage} <button onClick={()=>props.dispatch(deleteTodo(todo.id))} >remove</button></li>
              ))
          }
    </ul>
  )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
});

export default connect(mapStateToProps)(ListTodo)