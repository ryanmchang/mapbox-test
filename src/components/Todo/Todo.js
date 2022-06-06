import { Card, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {deleteTodo} from '../../state/actions/index';
import './todo.scss';


function Todo(props) {
  const dispatch = useDispatch();

  function todoCompleted() {
    dispatch(deleteTodo(props.todo.id));
  }

  return (
    <Card variant="outlined" sx={{width: 400, p: 4, m: 2}}>
      <h1>{props.todo.task}</h1>
      <p>{props.todo.description}</p>
      <Button variant="contained" onClick={todoCompleted}>Done</Button>
    </Card>
  );
}

export default Todo;