import { connect } from "react-redux";
import Todo from "../Todo/Todo";

function TodoList(props) {
  console.log(props)

  return (
    <div>
      { 
      props.todos.map( todo => 
        <Todo key={todo.id} todo={todo}/> )
      }
    </div>
  )
}

function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);