import { Button, Typography, TextField } from '@material-ui/core';
import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Context} from './StoreProvider';
import axios from 'axios';
import loginStyles from '../styles/Login';

const initialValues = {
  name: '',
  password: ''
};
const Login = () => {

  const classes = loginStyles();

  const [user, setUser] = useContext(Context);
  const [values, setValues] = useState(initialValues);

  const checkIfEmpty = () => {
    if (user)
      return false;
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(values);
    try {
      axios.post("http://localhost:4000/login", { username: values.name, password: values.password})
      .then((res) => {
        console.log(res);
        if (res.status === 200){
          setUser({
            id: res.data._id,
            name: values.name,
            password: values.password});
        }
        
      });
    }
    catch (e)
    {
      console.log(e.message);
    }
    setValues(initialValues);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  }

  const login = () => {
    if (checkIfEmpty()) {
      return (
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h2" type="h2"> Login </Typography>
          <TextField 
            name="name" 
            label="Username " 
            value={values.name} 
            variant="outlined"
            margin="normal"
            onChange={handleChange}
            fullWidth
            required
            autoFocus
            />
          <TextField
            name="password" 
            label="Password " 
            value={values.password} 
            variant="outlined" 
            margin="normal"
            onChange={handleChange} 
            fullWidth
            required
            />
          <Button 
            name="submit" 
            type="submit" 
            variant="contained" 
            color="primary"
          >
            Submit
          </Button>
          </form>
        </div>
      );
    }
    else {
      return (
        <Redirect to="/" />
      );
    }
  }
  return (
    <div>
     {login()}
    </div>
 );
}

export default Login;