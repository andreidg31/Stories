import React, {useState, useContext} from 'react';
import {
  Button,
  TextField,
  Typography
  
} from '@material-ui/core';
import {Context} from './StoreProvider';
import axios from 'axios';
import newPoststyles from '../styles/NewPost';
import { useHistory } from 'react-router-dom';

const NewPost = () => {

  const history = useHistory();
  const [user, setUser] = useContext(Context);
  const [newPost, setNewPost] = useState({
    'title': '',
    'body': '',
    'user' : null,
    'status': 'public',
    'date' : null
  });

  const classes = newPoststyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({...newPost, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.id);
    
    try {
      setNewPost({
        'title': newPost.title,
        'body': newPost.body,
        'user' : user.id,
        'status': 'public',
        'date' : null
      });
      console.log(newPost);
      axios.post("http://localhost:4000/createStory", newPost)
        .then((res) => {
          if (res.status === 200) {
            console.log("Story created succesfully!");
          }
          history.push('/posts');
        });
    }
    catch (e)
    {
      console.log(e.message);
    }
  }
  
  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography variant="h3" type="h3"> Create a new post</Typography>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          margin="normal"
          value={newPost.title}
          onChange={handleChange}
          fullWidth
          autoFocus
          required
        />
        <TextField 
          name="body"
          label="Story"
          variant="outlined"
          margin="normal"
          value={newPost.body}
          onChange={handleChange}
          fullWidth
          multiline
          required
        />
        <Button
          name="submit"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Create Post
        </Button>
      </form>
    </div>
  );
}

export default NewPost