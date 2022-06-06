import React from 'react';
import { useForm } from 'react-hook-form';
import {addTodo} from '../../state/actions/index';
import { useDispatch } from 'react-redux';
import { TextField, Button } from "@mui/material";
import './todoform.scss';

function TodoForm() {

  const { handleSubmit, register } = useForm({});
  const dispatch = useDispatch();

  function onSubmit(formData) {
    const todo = {...formData}
    //send to store
    dispatch(addTodo(todo));
  }

  //TODO: validation, (don't send on empty strings)

  return (
    <div>
      <h1>What it do?</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <TextField 
          id="outlined-basic" 
          name="task"
          className="textfield"
          label="Task" 
          variant="outlined"
          sx={{ m: 2 }} 
          {...register("task")}
        />

        <TextField
          id="outlined-multiline-flexible"
          name="description" 
          className="textfield"
          label="Description"
          multiline
          maxRows={4}
          sx={{ m: 2 }} 
          {...register("description")}
        />

        <Button 
          type="submit" 
          className="submit"
          variant="contained" 
          color="success"
          sx={{ m: 3 }} 
        > 
          Submit
        </Button>

      </form>

    </div>
  )
}

export default TodoForm;