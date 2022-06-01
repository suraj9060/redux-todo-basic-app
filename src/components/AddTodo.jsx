import React  from 'react'
import { connect ,  } from "react-redux"
import { addTodo } from '../actions/Action'

const AddTodo = (props) => {
  return (
      <form onSubmit={(e) => {
          e.preventDefault();
          let input = e.target.userInput.value;
      props.dispatch(addTodo(input));
      e.target.userInput.value = ""
      }}>
          <input type="text" name='userInput' />
          <button>submit</button>
    </form>
  )
}

export default connect()(AddTodo)